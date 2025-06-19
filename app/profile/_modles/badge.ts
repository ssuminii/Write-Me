export interface Badge {
  id: number
  style: string
  logo: string
  link: string
  bgColor: string
  logoColor: string
}

export interface BadgeProps {
  badges: Badge[]
  onBadgesChange: ((badges: Badge[]) => void)
}