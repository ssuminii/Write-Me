import { TagList } from '@/components/ui'
import { Contents, SearchBar, Title } from './_components'
import { getReadmes } from '@/lib/readme'

const TAGS = ['Frontend', 'Backend', 'Stack', 'Profile', 'Project', 'Simple']

export default async function Gallery({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams
  const keyword = q || ''
  const readmes = await getReadmes(keyword)

  return (
    <div className='flex flex-col items-center gap-8 p-10'>
      <Title />
      <div className='flex flex-col gap-4'>
        <SearchBar />
        <TagList tags={TAGS} selectable />
      </div>
      <Contents readmes={readmes} />
    </div>
  )
}
