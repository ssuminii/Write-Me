import type { ProfileHandlers, ProfileState } from '../_modles/profile'
import type { CardItem } from '@/types'
import { Introduce } from '../_components'

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
]
