import { LabelInput } from '@/components/ui'

interface StreakProps {
  value: string
  onChange: (value: string) => void
}

const Streak = ({ value, onChange }: StreakProps) => {
  return (
    <LabelInput
      id='github-streak-id'
      label='GitHub 아이디'
      placeholder='GitHub 아이디를 입력해주세요'
      value={value}
      onChange={onChange}
      pos='row'
    />
  )
}

export default Streak
