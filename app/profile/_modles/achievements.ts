export interface Achievement {
  id: number
  title: string
  start: string
  end: string
  desc: string
}

export interface AchievementProps {
  achievements: Achievement[]
  onAchievementsChange: ((achievements: Achievement[]) => void)
}