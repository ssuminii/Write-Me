import { TagList } from '@/components/ui'
import { Contents, SearchBar, Title } from './_components'

const TAGS = ['Frontend', 'Backend', 'Stack', 'Profile', 'Project', 'Simple']

export default function Gallery() {
  return (
    <div className='flex flex-col items-center gap-8 p-10'>
      <Title />
      <div className='flex flex-col gap-4'>
        <SearchBar />
        <TagList tags={TAGS} />
      </div>
      <Contents />
    </div>
  )
}
