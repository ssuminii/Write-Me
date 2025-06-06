import InputCard from '@/components/input-card'
import { Input, LabelInput } from '@/components/ui'

const Achievements = () => {
  return (
    <div>
      <InputCard>
        <LabelInput
          id=''
          label='활동명'
          placeholder='외부 활동 및 수상 내역을 입력해주세요.'
          value=''
          onChange={() => {}}
        ></LabelInput>
        <div className='flex flex-col gap-2'>
          <label htmlFor='period'>기간</label>
          <div className='flex gap-6 items-center'>
            <Input type='date' /> ~ <Input type='date' />
          </div>
        </div>
        <LabelInput
          id=''
          label='설명'
          placeholder='활동에 대한 설명을 입력해주세요.'
          value=''
          onChange={() => {}}
        ></LabelInput>
      </InputCard>
    </div>
  )
}

export default Achievements
