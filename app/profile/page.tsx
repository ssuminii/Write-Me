'use client'

import Markdown from '@/components/markdown'
import DndCardList from '@/components/dnd/card-list'
import { ProfileCards } from './data/profile-data'
import { useState, useEffect } from 'react'
import type { UniqueIdentifier } from '@dnd-kit/core'
import { useCardCollapse } from '@/hooks'
import { getMarkdownFromCards } from '@/utils/markdown'
import { useProfileForm } from './_hooks/useProfileForm'
import InfoContents from '@/components/info-contents'

export default function Profile() {
  const [order, setOrder] = useState<UniqueIdentifier[]>([])

  const { state, handlers } = useProfileForm()
  const { collapse, onToggleCollapse } = useCardCollapse()

  const cards = ProfileCards(state, handlers, collapse, onToggleCollapse)
  const orderedCards = order.map((id) => cards.find((card) => card.id === id)!).filter(Boolean)

  const markdown = getMarkdownFromCards(orderedCards)

  useEffect(() => {
    setOrder(cards.map((card) => card.id))
  }, [])

  return (
    <div className='flex w-full min-h-screen py-4'>
      <div className='flex flex-col flex-1 gap-4 px-10 overflow-y-auto max-h-screen'>
        <InfoContents markdown={markdown} />
        <DndCardList items={cards} onToggleCollapse={onToggleCollapse} onReorder={setOrder} />
      </div>
      <Markdown className='flex-2 overflow-y-auto max-h-screen p-1' value={markdown} />
    </div>
  )
}
