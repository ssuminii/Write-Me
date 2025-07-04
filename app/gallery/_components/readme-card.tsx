'use client'

import { Button, Card, LikeButton, TagList } from '@/components/ui'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import type { ReadmeCardProps } from '@/types'

const ReadmeCard = ({ id, title, author, thumbnailUrl, liked, likes }: ReadmeCardProps) => {
  const router = useRouter()

  return (
    <Card
      className='flex flex-col p-4 gap-1 cursor-pointer'
      onClick={() => router.push(`/gallery/${id}`)}
    >
      <h1 className='text-lg font-semibold'>{title}</h1>
      <span className='text-sm text-gray-600'>{author}</span>
      <Image src={thumbnailUrl ?? ''} alt={`${title} thumnail`} width={300} height={120} />
      <div className='flex justify-between items-center'>
        <Button
          className='bg-point rounded-lg w-fit text-black font-semibold py-0 hover:bg-point-hover'
          onClick={(e) => {
            e.stopPropagation()
            router.push('/gallery/1/fork')
          }}
        >
          Fork
        </Button>
        <LikeButton count={likes} liked={liked} onClick={() => console.log('❤️')} />
      </div>
      <div className='flex-grow border-t border-gray-300 mt-2 mb-2' />
      <TagList tags={['frontend', 'simple']} isDefault />
    </Card>
  )
}

export default ReadmeCard
