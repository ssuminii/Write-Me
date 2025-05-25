'use client'

import { Textarea } from '@/components/ui/textarea'

interface OverviewProps {
  value: string
  onChange: (value: string) => void
}

const Overview = ({ value, onChange }: OverviewProps) => {
  return (
    <div>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='프로젝트 소개를 입력해주세요'
      />
    </div>
  )
}

export default Overview
