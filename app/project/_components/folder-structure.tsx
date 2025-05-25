import { Textarea } from '@/components/ui/textarea'

interface FolderStrctureProps {
  value: string
  onChange: (value: string) => void
}

const FolderSturcture = ({ value, onChange }: FolderStrctureProps) => {
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder='폴더 구조를 붙여 넣어주세요.'
      className='h-[300px]'
    />
  )
}

export default FolderSturcture
