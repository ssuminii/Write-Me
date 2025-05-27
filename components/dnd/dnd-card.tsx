'use client'

import { Card, CardTitle } from '@/components/ui/card'
import { Menu, CircleMinus, CirclePlus } from 'lucide-react'
import { type ReactNode } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { UniqueIdentifier } from '@dnd-kit/core'

interface DndCardProps {
  id: UniqueIdentifier
  title: string
  children: ReactNode
  collapsed: boolean
  onToggleCollapse: () => void
}

const DndCard = ({ id, title, children, collapsed, onToggleCollapse }: DndCardProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <Card ref={setNodeRef} style={style} className='p-6'>
      <section className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <Menu className='cursor-pointer' {...attributes} {...listeners} />
          <CardTitle>{title}</CardTitle>
        </div>

        {collapsed ? (
          <CirclePlus onClick={onToggleCollapse} className='cursor-pointer' />
        ) : (
          <CircleMinus onClick={onToggleCollapse} className='cursor-pointer' />
        )}
      </section>

      {!collapsed && <section>{children}</section>}
    </Card>
  )
}

export default DndCard
