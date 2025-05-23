import Markdown from '@/components/markdown'
import DndCardList from '@/components/dnd/card-list'
import { profileCards } from './data/profile-data'

export default function Profile() {
  return (
    <div className='flex w-full min-h-screen py-4'>
      <DndCardList className='flex-1' initialItems={profileCards} />
      <Markdown className='flex-2' />
    </div>
  )
}
