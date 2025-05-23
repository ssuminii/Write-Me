'use client'

import { DndContext, closestCenter, type DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useState } from 'react'
import DndCard from './dnd-card'
import type { ReactNode } from 'react'

export interface CardItem {
  id: string
  title: string
  content: ReactNode
}

interface CardListProps {
  initialItems: CardItem[]
  className: string
}

const DndCardList = ({ initialItems, className }: CardListProps) => {
  const [items, setItems] = useState(initialItems)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id)
      const newIndex = items.findIndex((item) => item.id === over.id)

      setItems(arrayMove(items, oldIndex, newIndex))
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items.map((item) => item.id)} strategy={verticalListSortingStrategy}>
        <div className={`flex flex-col gap-4 px-10 ${className}`}>
          {items.map((item) => (
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
