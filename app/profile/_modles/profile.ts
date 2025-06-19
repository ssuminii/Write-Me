import type { ImageUpload } from '@/types'
import type { Project, Achievement, TechStack, CapsuleRender, TopLangs, Stats } from '../_modles'

export interface ProfileState {
  introduce: string
  projects: Project[]
  achievements: Achievement[]
  topLangs: TopLangs
  stats: Stats
  streak: string
  techStacks: TechStack[]
  capsuleRender: CapsuleRender
  profileImageUpload: ImageUpload
}

export interface ProfileHandlers {
  onIntroduceChange: (value: string) => void
  onProjectsChange: (value: Project[]) => void
  onAchievementsChange: (value: Achievement[]) => void
  onTopLangsChange: (value: TopLangs) => void
  onStatsChange: (value: Stats) => void
  onStreakChange: (value: string) => void
  onTechStacksChange: (value: TechStack[]) => void
  onCapsuleRenderChange: (value: CapsuleRender ) => void
  onProfileImageUpload: (profileImageUpload: ImageUpload) => void
}