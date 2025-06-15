import type { CardItem } from '@/types'
import type { Member, Stack } from '@/app/project/_models'
import type { CapsuleRender } from '@/app/profile/_modles'

// Dnd 카드 정렬
export const getMarkdownFromCards = (cards: CardItem[]) =>
  cards.filter((card) => !card.collapsed).map((c) => c.markdown?.trim()).filter(Boolean).join('\n\n<br>\n\n')

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
    const badgeUrl = generateBadgeUrl(stack.stack, stack.style, stack.bgColor, stack.iconColor)
    return `| ${badgeUrl} | ${stack.reason} |`
  })

  return [header, separator, ...rows].join('\n')
}

// 기술 뱃지
export function generateBadgeUrl(stack: string, style: string, bgColor: string, iconColor: string): string {
  return `![${stack}](https://img.shields.io/badge/${stack}-${bgColor ? bgColor.replace(/^#/, '') : 'black'}?${style === '---' ? '' : `style=${style}`}&logo=${stack}&logoColor=${iconColor ? iconColor.replace(/^#/, '') : 'white'})`
}

export const generateCapsuleRender = (config: CapsuleRender): string => {
  const { type, height, background, text, textColor, textAnimation, theme } = config

  const queryParams = [
    `type=${type}`,
    height && `height=${height}`,
    background && `color=${background}`,
    text && `text=${encodeURIComponent(text)}`,
    textColor && `fontColor=${textColor}`,
    textAnimation && `animation=${textAnimation}`,
    theme && `theme=${theme}`,
  ]
    .filter(Boolean)
    .join('&')

  return `![header](https://capsule-render.vercel.app/api?${queryParams})`
}
