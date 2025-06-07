import { Project, Achievement, TechStack } from '../_modles'

export interface ProfileState {
  introduce: string
  projects: Project[]
  achievements: Achievement[]
  mostUsedLanguages: string
  stats: string
  streak: string
  techStacks: TechStack[]
}

export interface ProfileHandlers {
  onIntroduceChange: (value: string) => void
  onProjectsChange: (value: Project[]) => void
  onAchievementsChange: (value: Achievement[]) => void
  onMostUsedLanguagesChange: (value: string) => void
  onStatsChange: (value: string) => void
  onStreakChange: (value: string) => void
  onTechStacksChange: (value: TechStack[]) => void
}