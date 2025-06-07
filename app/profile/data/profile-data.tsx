import {
  Achievements,
  Introduce,
  Project,
  MostUsedLanguages,
  Stats,
  Streak,
  TechStack,
} from '../_components'
import type { ProfileHandlers, ProfileState } from '../_modles/profile'
import type { CardItem } from '@/types'

export const ProfileCards = (
  state: ProfileState,
  handlers: ProfileHandlers,
  collapse: Record<string, boolean>,
  onToggleCollapse: (id: string) => void
): CardItem[] => [
  {
    id: 'profile-introduce',
    title: '간단 자기소개',
    content: <Introduce value={state.introduce} onChange={handlers.onIntroduceChange} />,
    markdown: `${state.introduce}`,
    collapsed: collapse['profile-introduce'] ?? false,
    onToggleCollapse: () => onToggleCollapse('profile-introduce'),
  },
  {
    id: 'profile-project',
    title: '프로젝트',
    content: <Project projects={state.projects} onProjectsChange={handlers.onProjectsChange} />,
    markdown: [
      '## Project',
      ...state.projects.map(({ title, desc, link }) =>
        [`#### ${title}`, desc, `🔗 [${link}](${link})`].join('\n\n')
      ),
    ].join('\n'),
    collapsed: collapse['profile-project'] ?? false,
    onToggleCollapse: () => onToggleCollapse('profile-project'),
  },
  {
    id: 'profile-achievements',
    title: '외부 활동 및 수상 내역',
    content: (
      <Achievements
        achievements={state.achievements}
        onAchievementsChange={handlers.onAchievementsChange}
      />
    ),
    markdown: [
      '## 외부 활동 및 수상 내역',
      ...state.achievements.map(({ title, desc, start, end }) =>
        [`#### ${title}`, `활동 기간: ${start} ~ ${end}`, desc].join('\n\n')
      ),
    ].join('\n'),
    collapsed: collapse['profile-achievements'] ?? false,
    onToggleCollapse: () => onToggleCollapse('profile-achievements'),
  },
  {
    id: 'github-stats',
    title: 'GitHub Stats',
    content: <Stats value={state.stats} onChange={handlers.onStatsChange} />,
    markdown: `![${state.stats}'s GitHub stats](https://github-readme-stats.vercel.app/api?username=${state.stats}&show_icons=true&count_private=true)`,
    collapsed: collapse['github-stats'] ?? false,
    onToggleCollapse: () => onToggleCollapse('github-stats'),
  },
  {
    id: 'streak-stats',
    title: 'GitHub Streak',
    content: <Streak value={state.streak} onChange={handlers.onStreakChange} />,
    markdown: `[![GitHub Streak](https://streak-stats.demolab.com/?user=${state.streak})](https://git.io/streak-stats)`,
    collapsed: collapse['streak-stats'] ?? false,
    onToggleCollapse: () => onToggleCollapse('streak-stats'),
  },
  {
    id: 'most-used-languages',
    title: 'Most Used Languages',
    content: (
      <MostUsedLanguages
        value={state.mostUsedLanguages}
        onChange={handlers.onMostUsedLanguagesChange}
      />
    ),
    markdown: `![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${state.mostUsedLanguages}&layout=compact)`,
    collapsed: collapse['most-used-languages'] ?? false,
    onToggleCollapse: () => onToggleCollapse('most-used-languages'),
  },
  {
    id: 'tech-stack',
    title: 'Tech Stack',
    content: (
      <TechStack techStacks={state.techStacks} onTechStacksChange={handlers.onTechStacksChange} />
    ),
    markdown: [
      '## Tech Stack',
      ...state.techStacks.map(
        ({ style, name, bgColor, logoColor }) =>
          `![${name}](https://img.shields.io/badge/${name}-${
            bgColor ? bgColor.replace(/^#/, '') : 'black'
          }?${style === '---' ? '' : `style=${style}`}&logo=${name}&logoColor=${
            logoColor ? logoColor.replace(/^#/, '') : 'white'
          })`
      ),
    ].join('\n'),
    collapsed: collapse['tech-stack'] ?? false,
    onToggleCollapse: () => onToggleCollapse('tech-stack'),
  },
]
