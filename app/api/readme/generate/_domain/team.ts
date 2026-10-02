// 프로필 링크만 (github.com/아이디). github.com/조직/저장소 같은 경로는 제외
const PROFILE_LINK = /github\.com\/([A-Za-z0-9-]+)\/?(?=[)"'\s]|$)/g

// 기존 README 팀원 표에는 있지만 커밋이 없는 사람 (디자이너, 다른 저장소 담당 등)
// 본문 링크까지 보면 엉뚱한 사람이 섞여서 표(| 로 시작하는 줄) 안만 봄
export function findReadmeOnlyMembers(readme: string | null, contributorLogins: string[]) {
  if (!readme) return []
  const known = new Set(contributorLogins.map((login) => login.toLowerCase()))
  const logins = readme
    .split('\n')
    .filter((line) => line.trimStart().startsWith('|'))
    .flatMap((line) => [...line.matchAll(PROFILE_LINK)].map((match) => match[1]))
  return [...new Set(logins)].filter((login) => !known.has(login.toLowerCase()))
}
