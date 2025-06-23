import { Comments } from './_components'
import { LikeButton, TagList } from '@/components/ui'
import Link from 'next/link'
import { mockReadme } from '@/mocks/gallery'
import Preview from '@/components/preview'

const Page = () => {
  return (
    <main className='flex p-10 gap-20'>
      <article className='flex flex-col gap-6 flex-3'>
        <header className='flex flex-col gap-2'>
          <h1 className='text-2xl font-semibold'>{mockReadme.title}</h1>
          <p className='text-sm text-gray-600'>@{mockReadme.author}</p>
          <div className='flex gap-2'>
            <Link
              href={`/gallery/${mockReadme.id}/fork`}
              className='border py-1 text-center w-[68px] bg-point hover:bg-point-hover rounded-sm text-sm'
            >
              Fork
            </Link>
            <LikeButton
              count={mockReadme.likes}
              liked={mockReadme.liked}
              className='border py-1 w-[68px] flex justify-center rounded-sm'
            />
          </div>
          <TagList tags={mockReadme.hashtags} />
        </header>
        <Preview source={mockReadme.source} />
      </article>
      <aside className='flex-1'>
        <Comments comments={mockReadme.comments} />
      </aside>
    </main>
  )
}

export default Page
