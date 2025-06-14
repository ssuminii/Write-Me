import type { FeaturesProps } from '../_models'
import { useDynamicList } from '@/hooks/useDynamicList'
import InputCard from '@/components/input-card'
import { Label, LabelInput, Textarea } from '@/components/ui'

const FeatureSection = ({ features, onFeaturesChange }: FeaturesProps) => {
  const { handleAdd, handleRemove, handleChange } = useDynamicList(features, onFeaturesChange, {
    feature: '',
    description: '',
  })

  return (
    <div className='flex flex-col gap-4'>
      {features.map((feature, idx) => (
        <InputCard
          key={feature.id}
          onAdd={handleAdd}
          onRemove={() => handleRemove(feature.id)}
          isRemovable={idx !== 0}
        >
          <LabelInput
            label='기능 이름'
            value={feature.feature}
            onChange={(value) => handleChange(feature.id, 'feature', value)}
            placeholder='ex) 로그인 및 회원가입'
          />
          <div className='flex flex-col gap-3'>
            <Label htmlFor='feature-description'>기능 상세 설명</Label>
            <Textarea
              id='feature-description'
              value={feature.description}
              onChange={(e) => handleChange(feature.id, 'description', e.target.value)}
              placeholder={`ex) 회원가입 폼 유효성 검사
  - 이메일, 비밀번호 입력 시 실시간 유효성 검사 적용
  - 비밀번호 보안 규칙(최소 8자, 특수문자 포함 등) 안내 및 검증
  - 에러 메시지와 함께 즉각적인 피드백 제공`}
            />
          </div>
        </InputCard>
      ))}
    </div>
  )
}

export default FeatureSection
