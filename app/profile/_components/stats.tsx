import { LabelInput } from '@/components/ui'

interface StatsProps {
  value: string
  onChange: (value: string) => void
}

const Stats = ({ value, onChange }: StatsProps) => {
  return (
    <LabelInput
      id='github-stats-id'
      label='GitHub 아이디'
      placeholder='GitHub 아이디를 입력해주세요'
      value={value}
      onChange={onChange}
      pos='row'
    />
  )
}

export default Stats
