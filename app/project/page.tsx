'use client'

import { DndCardList } from '@/components/dnd'
import Markdown from '@/components/markdown'
import { ProjectCards } from './data/project-data'
import { useProjectForm } from './_hooks/useProjectForm'
import { getMarkdownFromCards } from '@/utils/markdown'
import { useState, useEffect } from 'react'
import type { UniqueIdentifier } from '@dnd-kit/core'
import { useCardCollapse } from '@/hooks'
import InfoContents from '@/components/info-contents'

export default function Project() {
  const [order, setOrder] = useState<UniqueIdentifier[]>([])

  const { state, handlers } = useProjectForm()
  const { collapse, onToggleCollapse } = useCardCollapse()

  const cards = ProjectCards(state, handlers, collapse, onToggleCollapse)
  const orderedCards = order.map((id) => cards.find((card) => card.id === id)!).filter(Boolean)

  const markdown = getMarkdownFromCards(orderedCards)

  useEffect(() => {
    setOrder(cards.map((card) => card.id))
  }, [])

  return (
    <div className='flex w-full min-h-screen py-4'>
      <div className='flex flex-col flex-1 gap-4 px-10'>
        <InfoContents markdown={markdown} />
        <DndCardList items={cards} onToggleCollapse={onToggleCollapse} onReorder={setOrder} />
      </div>
      <Markdown className='flex-2' value={markdown} />
    </div>
  )
}
