export interface Streak {
  id: string
  theme: string
}

export interface StreakProps {
  streak: Streak
  onStreakChange: ((streak: Streak) => void)
}