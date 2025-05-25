'use client'

import { useState } from 'react'
import DndCardList from '@/components/dnd/card-list'
import Markdown from '@/components/markdown'
import { projectCards } from './data/project-data'

export default function Project() {
  const [title, setTitle] = useState('')
  const [overview, setOverview] = useState('')

  // 제목 입력
  const handleTitleChange = (value: string) => {
    const cleaned = value.replace(/^#+\s*/, '')
    setTitle(cleaned)
  }

  const handleOverviewChange = (value: string) => {
    setOverview(value)
  }

  const handleImageUpload = (value: string) => {}

  // projectCards 리팩토링
  const cards = projectCards(
    title,
    handleTitleChange,
    handleImageUpload,
    overview,
    handleOverviewChange
  )

  const markdown = cards
    .map((card) => card.markdown?.trim())
    .filter(Boolean)
    .join('\n\n')

  return (
    <div className='flex w-full min-h-screen py-4'>
      <DndCardList className='flex-1' items={cards} />
      <Markdown className='flex-2' value={markdown} onChange={() => {}} />
    </div>
  )
}
