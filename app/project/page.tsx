'use client'

import { DndCardList } from '@/components/dnd'
import Markdown from '@/components/markdown'
import { projectCards } from './data/project-data'
import { useProjectForm } from './_hooks/useProjectForm'
import { getMarkdownFromCards } from '@/utils/markdown'
import { useState, useEffect } from 'react'
import type { UniqueIdentifier } from '@dnd-kit/core'
import useCardCollapse from '@/hooks/useCardCollapse'

export default function Project() {
  const [order, setOrder] = useState<UniqueIdentifier[]>([])

  const { state, handlers } = useProjectForm()
  const { collapse, onToggleCollapse } = useCardCollapse()

  const cards = projectCards(state, handlers, collapse, onToggleCollapse)
  const orderedCards = order.map((id) => cards.find((card) => card.id === id)!).filter(Boolean)

  const markdown = getMarkdownFromCards(orderedCards)

  useEffect(() => {
    setOrder(cards.map((card) => card.id))
  }, [])

  return (
    <div className='flex w-full min-h-screen py-4'>
      <DndCardList
        className='flex-1'
        items={cards}
        onToggleCollapse={onToggleCollapse}
        onReorder={setOrder}
      />
      <Markdown className='flex-2' value={markdown} onChange={() => {}} />
    </div>
  )
}
