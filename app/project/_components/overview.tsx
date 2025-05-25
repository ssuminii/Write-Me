'use client'

import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'

const Overview = () => {
  const [value, setValue] = useState<string>('')

  return (
    <div>
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='프로젝트 소개를 입력해주세요'
      />
    </div>
  )
}

export default Overview
