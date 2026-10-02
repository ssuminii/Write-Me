// README 작성에 쓰이지 않는 파일
const IGNORED_EXT = /\.(png|jpe?g|gif|webp|avif|bmp|ico|svg|woff2?|ttf|otf|eot|mp4|mov|webm|mp3|wav|map|snap)$/i
const IGNORED_FILE = /(^|\/)(package-lock\.json|yarn\.lock|pnpm-lock\.yaml|bun\.lockb)$/
const IGNORED_DIR =
  /(^|\/)(node_modules|dist|build|out|\.next|coverage|__tests__|__snapshots__|__mocks__|tests?|fixtures|examples?|e2e|cypress)\//

// 묶지 않고 이름 그대로 보내는 파일 (기술 스택, API 명세의 근거)
const KEPT_FILE = [
  /(^|\/)route\.(ts|js)$/,
  /(^|\/)pages\/api\//,
  /(^|\/)(routes|controllers)\//,
  /(^|\/)(next|vite|astro|nuxt)\.config\.\w+$/,
  /(^|\/)(vercel\.json|netlify\.toml|Dockerfile|docker-compose\.ya?ml|schema\.prisma|tsconfig\.json)$/,
  /^\.github\/workflows\//,
]

const LOGO = /(^|\/)[^/]*(logo|banner|thumbnail|og-image|hero|cover)[^/]*\.(png|jpe?g|svg|gif|webp)$/i

export const isIgnoredDir = (path: string) => IGNORED_DIR.test(path)

const isIgnored = (path: string) => isIgnoredDir(path) || IGNORED_EXT.test(path) || IGNORED_FILE.test(path)

export const findLogoCandidates = (tree: string[], max = 5) =>
  tree.filter((path) => LOGO.test(path) && !isIgnoredDir(path)).slice(0, max)

// 파일을 폴더(maxDepth 단계)별로 묶어서 "폴더/ (파일 N개)"로 요약
export function summarizeTree(tree: string[], maxDepth = 3, maxLines = 300): string[] {
  const kept: string[] = []
  const folders = new Map<string, number>()

  for (const path of tree) {
    if (isIgnored(path)) continue
    const segments = path.split('/')
    if (segments.length === 1 || KEPT_FILE.some((re) => re.test(path))) {
      kept.push(path)
      continue
    }
    const folder = segments.slice(0, Math.min(segments.length - 1, maxDepth)).join('/')
    folders.set(folder, (folders.get(folder) ?? 0) + 1)
  }

  const lines = [
    ...kept,
    ...[...folders].map(([folder, count]) => `${folder}/ (파일 ${count}개)`),
  ].sort()

  // ponytail: 단순히 앞에서 자름. 초대형 모노레포에서 중요한 폴더가 잘리면 파일 수 순으로 고르기
  return lines.length > maxLines
    ? [...lines.slice(0, maxLines), `... (${lines.length - maxLines}줄 생략)`]
    : lines
}
