import type { UniqueIdentifier } from '@dnd-kit/core'
import type { ReactNode } from 'react'

export interface CardItem {
  id: UniqueIdentifier
  title: string
  content: ReactNode
  markdown: string
  collapsed: boolean
  onToggleCollapse: () => void
}

export interface CardListProps {
  items: CardItem[]
  className: string
  onToggleCollapse: (id: string) => void
  onReorder?: (newOrder: UniqueIdentifier[]) => void
}