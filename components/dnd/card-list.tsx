'use client'

import { DndContext, closestCenter, type DragEndEvent, type UniqueIdentifier } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useState } from 'react'
import DndCard from './dnd-card'
import type { ReactNode } from 'react'

export interface CardItem {
  id: UniqueIdentifier
  title: string
  content: ReactNode
  markdown?: string
}

interface CardListProps {
  items: CardItem[]
  className: string
}

const DndCardList = ({ items, className }: CardListProps) => {
  const [order, setOrder] = useState(items.map((item) => item.id))

  const sortedItems = order.map((id) => items.find((item) => item.id === id)!)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return
    if (active.id !== over.id) {
      const oldIndex = order.indexOf(active.id)
      const newIndex = order.indexOf(over.id)
      setOrder(arrayMove(order, oldIndex, newIndex))
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={order} strategy={verticalListSortingStrategy}>
        <div className={`flex flex-col gap-4 px-10 ${className}`}>
          {sortedItems.map((item) => (
            <DndCard key={item.id} id={item.id} title={item.title}>
              {item.content}
            </DndCard>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}

export default DndCardList
