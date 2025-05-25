'use client'

import { useState } from 'react'
import DndCardList from '@/components/dnd/card-list'
import Markdown from '@/components/markdown'
import { projectCards } from './data/project-data'

export default function Project() {
  const [title, setTitle] = useState('')
  const [overview, setOverview] = useState('')
  const [site, setSite] = useState({ name: '', link: '' })

  // 제목
  const handleTitleChange = (value: string) => {
    const cleaned = value.replace(/^#+\s*/, '')
    setTitle(cleaned)
  }

  // 메인 이미지 업로드
  const handleImageUpload = () => {}

  // 개요 및 간단 소개
  const handleOverviewChange = (value: string) => {
    setOverview(value)
  }

  // 링크
  const handleSiteChange = (value: { name: string; link: string }) => {
    setSite(value)
  }

  // projectCards 리팩토링
  const cards = projectCards(
    title,
    handleTitleChange,
    handleImageUpload,
    overview,
    handleOverviewChange,
    site,
    handleSiteChange
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
