import { Comments } from './_components'
import { TagList } from '@/components/ui'
import { LikeButtonContainer } from '@/components/like'
import Link from 'next/link'
import { mockReadme } from '@/mocks/gallery'
import Preview from '@/components/preview'
import { getReadmeById } from '@/lib/readme/get-readme-id'

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const readme = await getReadmeById(id)

  return (
    <main className='flex p-10 gap-20'>
      <article className='flex flex-col gap-6 flex-3'>
        <header className='flex flex-col gap-2'>
          <h1 className='text-2xl font-semibold'>{readme?.title}</h1>
          <p className='text-sm text-gray-600'>@{readme?.author.split('@')[0]}</p>
          <div className='flex gap-2'>
            <Link
              href={`/gallery/${readme?.id}/fork`}
              className='border py-1 text-center w-[68px] bg-point hover:bg-point-hover rounded-sm text-sm'
            >
              Fork
            </Link>
            <LikeButtonContainer readmeId={id} />
          </div>
          <TagList tags={readme?.hashtags} isDefault />
        </header>
        <Preview source={readme?.source} />
      </article>
      <aside className='flex-1'>
        <Comments comments={mockReadme.comments} />
      </aside>
    </main>
  )
}

export default Page
