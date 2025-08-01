'use client'

import { Card, TagList } from '@/components/ui'
import { LikeButtonContainer } from '@/components/like'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import type { CreateReadme } from '@/types'
import Link from 'next/link'

interface ReadmeCardProps extends CreateReadme {
  liked: boolean
  count: number
  readmeIds?: string[]
}

const ReadmeCard = ({
  id,
  title,
  author,
  thumbnail,
  hashtags,
  liked,
  count,
  readmeIds,
}: ReadmeCardProps) => {
  const router = useRouter()

  return (
    <Card
      className='flex flex-col p-4 gap-1 cursor-pointer'
      onClick={() => router.push(`/gallery/${id}`)}
    >
      <h1 className='text-lg font-semibold w-[300px] truncate'>{title}</h1>
      <span className='text-sm text-gray-600'>
        {author.includes('@') ? author.split('@')[0] : author}
      </span>
      <Image
        src={thumbnail ?? ''}
        alt={`${title} thumnail`}
        width={300}
        height={160}
        className='w-[300px] h-[160px] object-cover'
      />
      <div className='flex justify-between items-center'>
        <Link
          href={`/gallery/${id}/fork`}
          onClick={(e) => {
            e.stopPropagation()
          }}
          className='border py-1 text-center w-[68px] bg-point hover:bg-point-hover rounded-sm text-sm font-medium text-gray-800'
        >
          Fork
        </Link>
        <LikeButtonContainer readmeId={id} liked={liked} count={count} readmeIds={readmeIds} />
      </div>
      <div className='flex-grow border-t border-gray-300 mt-2 mb-2' />
      <div>
        <TagList tags={hashtags} isDefault />
      </div>
    </Card>
  )
}

export default ReadmeCard
