import type { ImageUpload } from '@/types'
import type { Project, Achievement, TechStack, CapsuleRender, TopLangs } from '../_modles'

export interface ProfileState {
  introduce: string
  projects: Project[]
  achievements: Achievement[]
  topLangs: TopLangs
  stats: string
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
  onStatsChange: (value: string) => void
  onStreakChange: (value: string) => void
  onTechStacksChange: (value: TechStack[]) => void
  onCapsuleRenderChange: (value: CapsuleRender ) => void
  onProfileImageUpload: (profileImageUpload: ImageUpload) => void
}