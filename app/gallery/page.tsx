import { TagList } from '@/components/ui'
import { Contents, SearchBar, Title } from './_components'
import { Suspense } from 'react'

const TAGS = ['Frontend', 'Backend', 'Stack', 'Profile', 'Project', 'Simple']

export default async function Gallery({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q: keyword = '' } = await searchParams

  return (
    <div className='flex flex-col items-center gap-8 p-10'>
      <Title />
      <div className='flex flex-col gap-4'>
        <SearchBar />
        <TagList tags={TAGS} selectable />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Contents keyword={keyword} />
      </Suspense>
    </div>
  )
}
