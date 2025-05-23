import Markdown from '@/components/markdown'
import { profileCards } from './data/profile-data'
import DndCardList from '@/components/dnd/card-list'

export default function Profile() {
  return (
    <div className='flex w-full min-h-screen'>
      <DndCardList initialItems={profileCards} />
      <Markdown className='flex-2' />
    </div>
  )
}
