'use client'

import DndCardList from '@/components/dnd/card-list'
import Markdown from '@/components/markdown'
import { projectCards } from './data/project-data'
import { useProjectForm } from './_hooks/useProjectForm'
import { getMarkdownFromCards } from '@/utils/markdown'

export default function Project() {
  const { state, handlers, collapsedMap } = useProjectForm()
  const cards = projectCards(state, handlers, collapsedMap)
  const markdown = getMarkdownFromCards(cards)

  return (
    <div className='flex w-full min-h-screen py-4'>
      <DndCardList className='flex-1' items={cards} onToggleCollapse={handlers.onToggleCollapse} />
      <Markdown className='flex-2' value={markdown} onChange={() => {}} />
    </div>
  )
}
