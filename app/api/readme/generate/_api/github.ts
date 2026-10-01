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
  tree: string[]
}

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
    tree,
  }
}
