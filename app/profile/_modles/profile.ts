import { Project, Achievement } from '../_modles'

export interface ProfileState {
  introduce: string
  projects: Project[]
  achievements: Achievement[]
}

export interface ProfileHandlers {
  onIntroduceChange: (value: string) => void
  onProjectsChange: (value: Project[]) => void
  onAchievementsChange: (value: Achievement[]) => void
}