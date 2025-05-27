import type { CardItem } from '@/components/dnd/card-list'
import type { Member } from '@/app/project/_models/members'

export const getMarkdownFromCards = (cards: CardItem[]) =>
  cards.map((c) => c.markdown?.trim()).filter(Boolean).join('\n\n<br>\n\n')

export function generateTeamMarkdownTable(members: Member[]): string {
  const name = members.map((m) => `**${m.name}**`).join(' | ')
  const separators = members.map(() => ':--:').join(' | ')  
  const roles = members.map((m) => m.role).join(' | ')            
  const links = members.map((m) =>`[<img src="https://avatars.githubusercontent.com/${m.github}?v=4" height=150 width=150><br/> @${m.github}](https://github.com/${m.github})`).join(' | ') 

  return [`| ${roles} |`, `| ${separators} |`, `| ${name} |`, `| ${links} |`].join('\n')
}