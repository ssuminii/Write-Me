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
  collapsed?: boolean
}

interface CardListProps {
  items: CardItem[]
  className: string
  onToggleCollapse: (id: string) => void
  onReorder?: (newOrder: UniqueIdentifier[]) => void
}

const DndCardList = ({ items, className, onToggleCollapse, onReorder }: CardListProps) => {
  const [order, setOrder] = useState(items.map((item) => item.id))

  const sortedItems = order.map((id) => items.find((item) => item.id === id)!)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return

    const oldIndex = order.indexOf(active.id)
    const newIndex = order.indexOf(over.id)

    const newOrder = arrayMove(order, oldIndex, newIndex)
    setOrder(newOrder)
    onReorder?.(newOrder)
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={order} strategy={verticalListSortingStrategy}>
        <div className={`flex flex-col gap-4 px-10 ${className}`}>
          {sortedItems.map((item) => (
            <DndCard
              key={item.id}
              id={item.id}
              title={item.title}
              collapsed={item.collapsed ?? false}
              onToggleCollapse={() => onToggleCollapse(item.id.toString())}
            >
              {item.content}
            </DndCard>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}

export default DndCardList
