import { isIgnoredDir } from '../_domain/fileTree'
const GITHUB_API = 'https://api.github.com'

export class GithubError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
  }
}

export interface RepoContext {
  owner: string
  repo: string
  description: string | null
  homepage: string | null
  language: string | null
  topics: string[]
  createdAt: string
  pushedAt: string
  packageJson: string | null
  readme: string | null
  branch: string
  tree: string[]
  schema: string | null
  contributors: Contributor[]
}

export interface Contributor {
  login: string
  name: string
  avatarUrl: string
  commits: string[]
}

const MAX_CONTRIBUTORS = 6
const COMMITS_PER_CONTRIBUTOR = 20
// ponytail: 스키마 파일은 앞부분만 보냄. 잘리는 대형 스키마가 생기면 테이블 정의만 뽑기
const MAX_SCHEMA_LENGTH = 8000

const findSchemaPath = (tree: string[]) =>
  // 예제·테스트 폴더의 스키마는 실제 서비스 DB가 아니라 제외
  tree.filter((path) => !isIgnoredDir(path)).find((path) => path.endsWith('schema.prisma')) ??
  tree.filter((path) => !isIgnoredDir(path)).find((path) => /(^|\/)(migrations?|supabase)\/.*\.sql$|(^|\/)schema\.sql$/.test(path))

export function parseRepoUrl(input: string) {
  const match = input
    .trim()
    .match(/^(?:https?:\/\/)?(?:www\.)?(?:github\.com\/)?([\w.-]+)\/([\w.-]+?)(?:\.git)?\/?$/)
  if (!match) throw new GithubError(400, 'GitHub 저장소 주소가 올바르지 않아요.')
  return { owner: match[1], repo: match[2] }
}

async function githubFetch(path: string, accept = 'application/vnd.github+json') {
  const token = process.env.GITHUB_TOKEN
  const url = `${GITHUB_API}${path}`
  let res = await fetch(url, {
    headers: token ? { Accept: accept, Authorization: `Bearer ${token}` } : { Accept: accept },
  })
  // 토큰이 만료·잘못됐으면 토큰 없이 다시 시도 (시간당 60회 제한)
  if (res.status === 401 && token) res = await fetch(url, { headers: { Accept: accept } })
  return res
}

// 파일이 없으면 null
async function fetchRawFile(path: string) {
  const res = await githubFetch(path, 'application/vnd.github.raw+json')
  return res.ok ? res.text() : null
}

export async function fetchRepoContext(owner: string, repo: string): Promise<RepoContext> {
  const base = `/repos/${owner}/${repo}`
  const repoRes = await githubFetch(base)

  if (repoRes.status === 404)
    throw new GithubError(404, '저장소를 찾을 수 없어요. 공개 저장소인지 확인해주세요.')
  if (repoRes.status === 403 || repoRes.status === 429)
    throw new GithubError(429, 'GitHub 요청 한도를 넘었어요. 잠시 후 다시 시도해주세요.')
  if (!repoRes.ok) throw new GithubError(502, 'GitHub에서 저장소 정보를 가져오지 못했어요.')

  const info = await repoRes.json()

  const [packageJson, readme, treeRes] = await Promise.all([
    fetchRawFile(`${base}/contents/package.json`),
    fetchRawFile(`${base}/readme`),
    githubFetch(`${base}/git/trees/${info.default_branch}?recursive=1`),
  ])
  const tree: string[] = treeRes.ok
    ? (await treeRes.json()).tree.map((item: { path: string }) => item.path)
    : []
  const schemaPath = findSchemaPath(tree)
  const [contributors, schema] = await Promise.all([
    fetchContributors(base),
    schemaPath ? fetchRawFile(`${base}/contents/${schemaPath}`) : null,
  ])

  return {
    owner,
    repo,
    description: info.description,
    homepage: info.homepage || null,
    language: info.language,
    topics: info.topics ?? [],
    createdAt: info.created_at,
    pushedAt: info.pushed_at,
    packageJson,
    readme,
    branch: info.default_branch,
    tree,
    schema: schema?.slice(0, MAX_SCHEMA_LENGTH) ?? null,
    contributors,
  }
}

interface GithubContributor {
  login: string
  type: string
  avatar_url: string
}

interface GithubCommit {
  commit: { message: string; author: { name: string } }
}

// 봇과 Claude(Co-Authored-By로 잡히는 기여자)는 제외
const isPerson = ({ login, type }: GithubContributor) =>
  type === 'User' && !login.endsWith('[bot]') && login.toLowerCase() !== 'claude'

async function fetchContributors(base: string): Promise<Contributor[]> {
  const res = await githubFetch(`${base}/contributors?per_page=20`)
  if (!res.ok || res.status === 204) return []
  const people = ((await res.json()) as GithubContributor[]).filter(isPerson).slice(0, MAX_CONTRIBUTORS)

  return Promise.all(
    people.map(async ({ login, avatar_url }) => {
      const commitsRes = await githubFetch(`${base}/commits?author=${login}&per_page=${COMMITS_PER_CONTRIBUTOR}`)
      const commits: GithubCommit[] = commitsRes.ok ? await commitsRes.json() : []
      return {
        login,
        name: commits[0]?.commit.author.name ?? login,
        avatarUrl: avatar_url,
        commits: commits.map(({ commit }) => commit.message.split('\n')[0]),
      }
    }),
  )
}
