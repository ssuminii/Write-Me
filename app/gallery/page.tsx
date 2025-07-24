'use client'

import { TagList } from '@/components/ui'
import { Contents, SearchBar, Title } from './_components'
import { useReadmesQuery } from '@/hooks/queries'
import { useSearchParams } from 'next/navigation'

const TAGS = ['Frontend', 'Backend', 'Stack', 'Profile', 'Project', 'Simple']

export default function Gallery() {
  const searchParams = useSearchParams()
  const keyword = searchParams.get('q') || ''
  const { data } = useReadmesQuery(keyword)

  return (
    <div className='flex flex-col items-center gap-8 p-10'>
      <Title />
      <div className='flex flex-col gap-4'>
        <SearchBar />
        <TagList tags={TAGS} selectable />
      </div>
      <Contents readmes={data ?? []} />
    </div>
  )
}
