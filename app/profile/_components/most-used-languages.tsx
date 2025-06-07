import { LabelInput } from '@/components/ui'

interface MostUsedLanguagesProps {
  value: string
  onChange: (value: string) => void
}

const MostUsedLanguages = ({ value, onChange }: MostUsedLanguagesProps) => {
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

export default MostUsedLanguages
