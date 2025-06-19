export interface Stats {
  id: string
  theme: string
}

export interface StatsProps {
  stats: Stats
  onStatsChange: ((stats: Stats) => void) 
}