'use client'

import Markdown from '@/components/markdown'
import { Info } from './_components'
import FileActions from '@/components/file-actions'
import { useState, useEffect } from 'react'
import { useReadmeByIdQuery } from '@/hooks/queries'
import { useParams } from 'next/navigation'

const Page = () => {
  const params = useParams()
  const id = params?.id as string

  const { data: readme } = useReadmeByIdQuery(id)

  const [markdown, setMarkdown] = useState<string>('')

  useEffect(() => {
    if (readme?.source) {
      setMarkdown(readme.source)
    }
  }, [readme?.source])

  return (
    <div className='flex flex-col gap-6 py-6 h-full'>
      <div className='flex items-center justify-between mx-10 '>
        <Info user={readme?.author.split('@')[0] ?? ''} />
        <FileActions markdown={markdown} />
      </div>
      <Markdown value={markdown} onChange={(value) => setMarkdown(value)} className='flex-1 px-2' />
    </div>
  )
}

export default Page
