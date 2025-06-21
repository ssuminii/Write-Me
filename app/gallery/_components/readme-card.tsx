import { Button, Card } from '@/components/ui'
import Image from 'next/image'
import { LikeButton } from '@/components/ui'
import type { ReadmeCardProps } from '@/types'

const ReadmeCard = ({ title, author, thumbnailUrl, liked, likes }: ReadmeCardProps) => {
  return (
    <Card className='flex flex-col p-4 gap-1 cursor-pointer'>
      <h1 className='text-lg font-semibold'>{title}</h1>
      <span className='text-sm text-gray-600'>{author}</span>
      <Image src={thumbnailUrl} alt={`${title} thumnail`} width={300} height={120} />
      <div className='flex justify-between items-center'>
        <Button className='bg-point rounded-full w-fit text-black font-semibold hover:bg-point-hover px-6'>
          Fork
        </Button>
        <LikeButton count={likes} liked={liked} onClick={() => console.log('❤️')} />
      </div>
    </Card>
  )
}

export default ReadmeCard
