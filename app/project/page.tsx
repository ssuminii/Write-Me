import { projectCards } from './data/project-data'
import DndCardList from '@/components/dnd/card-list'

export default function Project() {
  return (
    <div>
      <DndCardList initialItems={projectCards} />
    </div>
  )
}
