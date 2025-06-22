'use client'

import { ReadmeCard } from './'
import { AddButton } from '@/components/ui'
import { mockReadmeCards } from '@/mocks/gallery'
import { useRouter } from 'next/navigation'

const Contents = () => {
  const router = useRouter()

  return (
    <div className='relative flex flex-col items-center w-full'>
      <AddButton
        onClick={() => {
          router.push('/gallery/new')
        }}
        label='README 등록하기'
        className='absolute right-40'
      />

      <div className='flex flex-wrap justify-center gap-6 mt-10'>
        {mockReadmeCards.map((mockReadmeCard) => (
          <ReadmeCard key={mockReadmeCard.id} {...mockReadmeCard} />
        ))}
      </div>
    </div>
  )
}

export default Contents
