// 서비스 이름이 들어 있는 파일 (Vite·CRA는 index.html, Next.js는 layout의 metadata)
const TITLE_FILES = [
  'index.html',
  'public/index.html',
  'app/layout.tsx',
  'src/app/layout.tsx',
  'app/layout.jsx',
  'src/app/layout.jsx',
]

// 템플릿이 만든 기본 제목은 서비스 이름이 아님
const TEMPLATE_TITLE =
  /^(vite\b.*|.*\+\s*vite|react app|create next app|getting started with create react app)$/i

export const findTitleFile = (tree: string[]) => TITLE_FILES.find((file) => tree.includes(file))

const clean = (text: string) =>
  text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // 배지·이미지
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // 링크는 글자만
    .replace(/<[^>]+>/g, '')
    .replace(/&#?\w+;/g, ' ') // &middot; 같은 HTML 특수문자
    .replace(/[\p{Extended_Pictographic}️‍]/gu, '')
    .replace(/[\s·|:-]+$/, '')
    .trim()

const valid = (name: string | undefined) => (name && !TEMPLATE_TITLE.test(name) ? name : null)

// 서비스 이름이 가장 정확한 것부터: siteName → <title> → metadata의 title → siteTitle 같은 변수
const TITLE_PATTERNS = [
  /og:site_name["']\s+content=["']([^"']+)/i,
  /\bsiteName:\s*['"`]([^'"`]+)['"`]/,
  /<title>([^<]+)<\/title>/i,
  /\btitle:\s*['"`]([^'"`]+)['"`]/,
  /\w*[tT]itle\s*=\s*['"`]([^'"`]+)['"`]/,
]

export function extractHtmlTitle(source: string): string | null {
  const title = TITLE_PATTERNS.map((re) => source.match(re)?.[1]).find(Boolean)
  return valid(title && clean(title))
}

// 코드 블록을 빼고 문서의 첫 제목이 # 또는 <h1>일 때만 (## 뒤에 나오는 # 은 본문 제목)
const findReadmeTitle = (readme: string) => {
  const first = readme
    .replace(/```[\s\S]*?```/g, '')
    .match(/^#{1,6}\s+.+$|<h1[^>]*>[\s\S]*?<\/h1>/im)?.[0]
  return first?.match(/^#\s+(.+)$/)?.[1] ?? first?.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]
}

// README 맨 위 제목 → HTML 제목 → 저장소 이름 순
export function findProjectName(readme: string | null, htmlTitle: string | null, repo: string) {
  const heading = readme ? findReadmeTitle(readme) : undefined
  return valid(heading && clean(heading)) ?? htmlTitle ?? repo
}
