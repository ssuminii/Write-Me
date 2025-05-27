import type { CardItem } from '@/components/dnd/card-list'
import type { Member, Stack } from '@/app/project/_models'

// Dnd 카드 정렬
export const getMarkdownFromCards = (cards: CardItem[]) =>
  cards.map((c) => c.markdown?.trim()).filter(Boolean).join('\n\n<br>\n\n')

// 팀원 테이블
export function generateTeamMDTable(members: Member[]): string {
  const name = members.map((m) => `**${m.name}**`).join(' | ')
  const separators = members.map(() => ':--:').join(' | ')  
  const roles = members.map((m) => m.role).join(' | ')            
  const links = members.map((m) =>`[<img src="https://avatars.githubusercontent.com/${m.github}?v=4" height=150 width=150><br/> @${m.github}](https://github.com/${m.github})`).join(' | ') 

  return [`| ${roles} |`, `| ${separators} |`, `| ${name} |`, `| ${links} |`].join('\n')
}

// 기술 스택 테이블
export function generateStackMDTable(stacks: Stack[]): string {
  const header = '| 기술 스택 | 도입 이유 |'
  const separator = '| --- | --- |'

  const rows = stacks.map((stack) => {
    const badgeUrl = generateBadgeUrl(stack.stack)
    return `| ![${stack.stack}](${badgeUrl}) | ${stack.reason} |`
  })

  return [header, separator, ...rows].join('\n')
}

function generateBadgeUrl(name: string): string {
  const lower = name.toLowerCase()
  const logo = encodeURIComponent(lower)
  return `https://img.shields.io/badge/${logo}-%23000000.svg?style=for-the-badge&logo=${logo}&logoColor=white`
}