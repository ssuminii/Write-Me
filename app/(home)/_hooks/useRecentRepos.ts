import { useEffect, useState } from 'react'

const STORAGE_KEY = 'recent-repos'
const MAX_RECENT = 3

// https://github.com/owner/repo.git → owner/repo
const toRepoName = (repoUrl: string) =>
  repoUrl
    .trim()
    .replace(/^(https?:\/\/)?(www\.)?github\.com\//, '')
    .replace(/(\.git)?\/?$/, '')

// 내가 README를 만든 저장소를 이 브라우저에만 저장 (비공개 모드 등에서는 저장 안 될 수 있음)
export function useRecentRepos() {
  const [repos, setRepos] = useState<string[]>([])

  // 서버 렌더링 결과와 맞추려고 처음엔 빈 목록, 화면이 뜬 뒤에 읽음
  useEffect(() => {
    try {
      setRepos(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]'))
    } catch {}
  }, [])

  const addRepo = (repoUrl: string) => {
    const repo = toRepoName(repoUrl)
    const next = [repo, ...repos.filter((r) => r !== repo)].slice(0, MAX_RECENT)
    setRepos(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {}
  }

  return { repos, addRepo }
}
