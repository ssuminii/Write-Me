import { LabelInput } from '@/components/ui'

interface TopLangsProps {
  value: string
  onChange: (value: string) => void
}

const TopLangs = ({ value, onChange }: TopLangsProps) => {
  return (
    <LabelInput
      id='github-id'
      label='GitHub 아이디'
      placeholder='GitHub 아이디를 입력해주세요'
      value={value}
      onChange={onChange}
      pos='row'
    />
  )
}

export default TopLangs
