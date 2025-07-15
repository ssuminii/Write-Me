'use client'

import { Button, Card, TagList } from '@/components/ui'
import { LikeButtonContainer } from '@/components/like'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import type { CreateReadme } from '@/types'

const ReadmeCard = ({ id, title, author, thumbnail, hashtags }: CreateReadme) => {
  const router = useRouter()

  return (
    <Card
      className='flex flex-col p-4 gap-1 cursor-pointer'
      onClick={() => router.push(`/gallery/${id}`)}
    >
      <h1 className='text-lg font-semibold'>{title}</h1>
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
        <Button
          className='bg-point rounded-lg w-fit text-black font-semibold py-0 hover:bg-point-hover'
          onClick={(e) => {
            e.stopPropagation()
            router.push(`/gallery/${id}/fork`)
          }}
        >
          Fork
        </Button>
        <LikeButtonContainer readmeId={id} />
      </div>
      <div className='flex-grow border-t border-gray-300 mt-2 mb-2' />
      <div>
        <TagList tags={hashtags} isDefault />
      </div>
    </Card>
  )
}

export default ReadmeCard
