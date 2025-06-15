import { ImageUpload } from '@/types'

export interface Featrue {
  id: number
  feature: string
  description: string
  imageUpload: ImageUpload
}

export interface FeaturesProps {
  features: Featrue[]
  onFeaturesChange: (features: Featrue[]) => void
}