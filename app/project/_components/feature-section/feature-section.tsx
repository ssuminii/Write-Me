import InputCard from '@/components/input-card'
import { Button, Input, Textarea } from '@/components/ui'

const FeatureSection = () => {
  return (
    <div>
      <InputCard>
        <div className='flex flex-col gap-4'>
          <label htmlFor='feature-name'>기능 이름</label>
          <Input />
        </div>

        <div className='flex flex-col gap-4'>
          <label htmlFor='feature-name'>기능 상세 설명</label>
          <Textarea />
        </div>

        <div className='flex items-center gap-4'>
          <div>이미지 업로드</div>
          <Button>Upload</Button>
        </div>
      </InputCard>
    </div>
  )
}

export default FeatureSection
