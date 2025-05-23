'use client'

import { Card, CardTitle } from '@/components/ui/card'
import { Menu, CircleMinus, CirclePlus } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface DndCardProps {
  id: string
  title: string
  children: ReactNode
}

const DndCard = ({ id, title, children }: DndCardProps) => {
  const [collapsed, setCollapsed] = useState(false)

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
          <CirclePlus onClick={() => setCollapsed(false)} className='cursor-pointer' />
        ) : (
          <CircleMinus onClick={() => setCollapsed(true)} className='cursor-pointer' />
        )}
      </section>

      {!collapsed && <section>{children}</section>}
    </Card>
  )
}

export default DndCard
