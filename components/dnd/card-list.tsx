'use client'

import { DndContext, closestCenter, type DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useState } from 'react'
import DndCard from './dnd-card'
import type { CardListProps } from '@/types'

const DndCardList = ({ items, className, onReorder }: CardListProps) => {
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
              onToggleCollapse={item.onToggleCollapse}
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
