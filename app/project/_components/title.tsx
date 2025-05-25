'use client'

import { Input } from '@/components/ui/input'

interface TitleProps {
  value: string
  onChange: (value: string) => void
}

const Title = ({ value, onChange }: TitleProps) => {
  return (
    <div>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='프로젝트 이름을 입력해주세요'
      />
    </div>
  )
}

export default Title
