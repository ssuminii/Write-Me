export interface Featrue {
  id: number
  feature: string
  description: string
}

export interface FeaturesProps {
  features: Featrue[]
  onFeaturesChange: (features: Featrue[]) => void
}