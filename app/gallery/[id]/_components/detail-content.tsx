'use client'

import { LikeButtonContainer } from '@/components/like'
import Preview from '@/components/preview'
import { TagList } from '@/components/ui'
import { useReadmeByIdQuery } from '@/hooks/queries'
import Link from 'next/link'

interface DetailContentProps {
  id: string
}

export const DetailContent = ({ id }: DetailContentProps) => {
  const { data: readme } = useReadmeByIdQuery(id)

  return (
    <article className='flex flex-col gap-6 flex-3'>
      <header className='flex flex-col gap-2'>
        <h1 className='text-2xl font-semibold'>{readme?.title}</h1>
        <p className='text-sm text-gray-600'>@{readme?.author.split('@')[0]}</p>
        <div className='flex gap-2'>
          <Link
            href={`/gallery/${id}/fork`}
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
  )
}
