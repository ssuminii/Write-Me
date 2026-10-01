import type { ReadmeVersion } from '@/types'

export const VERSION_LABEL: Record<ReadmeVersion, string> = {
  simple: '간단히',
  detailed: '자세히',
}

export interface ReadmeExample {
  repo: string
  name: string
  description: string
  version: ReadmeVersion
  color: string
}

export const EXAMPLES: ReadmeExample[] = [
  { repo: 'ssuminii/Write-Me', name: 'Write-Me', description: 'README 생성기', version: 'detailed', color: 'var(--iris-1)' },
  { repo: 'Catch-Letter/Catch-Letter-FE', name: 'Catch-Letter', description: '편지 플랫폼', version: 'simple', color: 'var(--iris-3)' },
  { repo: 'Digginn/Diggin-landing', name: 'Diggin Landing', description: '랜딩 페이지', version: 'simple', color: 'var(--iris-5)' },
  { repo: 'pmndrs/zustand', name: 'Zustand', description: '상태 관리', version: 'simple', color: 'var(--iris-2)' },
]

export const CHIP_EXAMPLES = EXAMPLES.filter(({ repo }) => repo !== 'pmndrs/zustand')

export const toRepoUrl = (repo: string) => `https://github.com/${repo}`
