import InputCard from '@/components/input-card'
import { Button, Input, Textarea } from '@/components/ui'
import type { RemovableItemControls } from '@/types'

interface AddFeaturesProps extends RemovableItemControls {
  value: {
    feature: string
    description: string
  }
  onChange: (field: 'feature' | 'description', val: string) => void
}

const FeatureInputCard = ({ onAdd, onRemove, isRemovable, value, onChange }: AddFeaturesProps) => {
  return (
    <InputCard isRemovable={isRemovable} onAdd={onAdd} onRemove={onRemove}>
      <div className='flex flex-col gap-4'>
        <label htmlFor='feature-name'>기능 이름</label>
        <Input
          id='feature-name'
          placeholder='로그인 및 회원가입'
          value={value.feature}
          onChange={(e) => onChange('feature', e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-4'>
        <label htmlFor='feature-description'>기능 상세 설명</label>
        <Textarea
          id='feature-description'
          value={value.description}
          onChange={(e) => onChange('description', e.target.value)}
        />
      </div>

      <div className='flex items-center gap-4'>
        <div>이미지 업로드</div>
        <Button>Upload</Button>
      </div>
    </InputCard>
  )
}

export default FeatureInputCard
