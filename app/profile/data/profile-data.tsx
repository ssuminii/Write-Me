import { Achievements, Introduce, Project, MostUsedLanguages } from '../_components'
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
      ...state.projects.flatMap(({ title, desc, link }) =>
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
      ...state.achievements.flatMap(({ title, desc, start, end }) =>
        [`#### ${title}`, `활동 기간: ${start} ~ ${end}`, desc].join('\n\n')
      ),
    ].join('\n'),
    collapsed: collapse['profile-achievements'] ?? false,
    onToggleCollapse: () => onToggleCollapse('profile-achievements'),
  },
  {
    id: 'most-used-languages',
    title: 'Most Used Languages',
    content: (
      <MostUsedLanguages value={state.mostUsedLanguages} onChange={handlers.onMostUsedLanguages} />
    ),
    markdown: `![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${state.mostUsedLanguages}&layout=compact)`,
    collapsed: collapse['most-used-languages'] ?? false,
    onToggleCollapse: () => onToggleCollapse('most-used-languages'),
  },
]
