'use client'

import Markdown from '@/components/markdown'
import { Info } from './_components'
import FileActions from '@/components/file-actions'
import { useState } from 'react'
import { mockReadme } from '@/mocks/gallery'

const Page = () => {
  const [markdown, setMarkdown] = useState<string>(mockReadme.source ?? '')

  return (
    <div className='flex flex-col gap-6 py-6 h-full'>
      <div className='flex items-center justify-between mx-10'>
        <Info user={mockReadme.author} />
        <FileActions markdown={markdown} />
      </div>
      <Markdown value={markdown} onChange={(value) => setMarkdown(value)} className='flex-1' />
    </div>
  )
}

export default Page
