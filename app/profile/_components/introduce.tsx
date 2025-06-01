import { Textarea } from '@/components/ui'

interface IntroduceProps {
  value: string
  onChange: (value: string) => void
}

const Introduce = ({ value, onChange }: IntroduceProps) => {
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder='간단한 자기소개를 입력해주세요.'
    />
  )
}

export default Introduce
