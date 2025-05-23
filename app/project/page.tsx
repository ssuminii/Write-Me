import DndCardList from '@/components/dnd/card-list'
import Markdown from '@/components/markdown'
import { projectCards } from './data/project-data'

export default function Project() {
  return (
    <div className='flex w-full min-h-screen py-4'>
      <DndCardList className='flex-1' initialItems={projectCards} />
      <Markdown className='flex-2' />
    </div>
  )
}
