import FeatureInputCard from './feature-input-card'
import { FeaturesProps } from '@/app/project/_models/feature'

const FeatureSection = ({ features, onFeaturesChange }: FeaturesProps) => {
  const handleAddFeature = () => {
    onFeaturesChange([...features, { id: Date.now(), feature: '', description: '' }])
  }

  const handleRemoveFeature = (id: number) => {
    onFeaturesChange(features.filter((feature) => feature.id !== id))
  }

  const handleChange = (id: number, field: 'feature' | 'description', value: string) => {
    const updated = features.map((feature) =>
      feature.id === id ? { ...feature, [field]: value } : feature
    )
    onFeaturesChange(updated)
  }

  return (
    <div className='flex flex-col gap-4'>
      {features.map((feature, idx) => (
        <FeatureInputCard
          key={feature.id}
          value={feature}
          onChange={(field, val) => handleChange(feature.id, field, val)}
          onAdd={handleAddFeature}
          onRemove={() => handleRemoveFeature(feature.id)}
          isRemovable={idx !== 0}
        />
      ))}
    </div>
  )
}

export default FeatureSection
