import { Introduce, Project } from '../_components'
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
    content: <Project />,
    markdown: ``,
    collapsed: collapse['profile-project'] ?? false,
    onToggleCollapse: () => onToggleCollapse('profile-project'),
  },
]
