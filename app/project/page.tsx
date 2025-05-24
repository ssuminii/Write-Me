'use client'

import { useState } from 'react'
import DndCardList from '@/components/dnd/card-list'
import Markdown from '@/components/markdown'
import { projectCards } from './data/project-data'

export default function Project() {
  const [title, setTitle] = useState('')
  const markdown = `# ${title}`

  const handleTitleChange = (value: string) => {
    const cleaned = value.replace(/^#+\s*/, '')
    setTitle(cleaned)
  }

  const cards = projectCards(title, handleTitleChange)

  return (
    <div className='flex w-full min-h-screen py-4'>
      <DndCardList className='flex-1' items={cards} />
      <Markdown className='flex-2' value={markdown} onChange={() => {}} />
    </div>
  )
}
