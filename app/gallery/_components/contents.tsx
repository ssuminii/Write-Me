'use client'

import { ReadmeCard } from './'
import { AddButton } from '@/components/ui'
import { mockReadmeCards } from '@/mocks/gallery'

const Contents = () => {
  return (
    <div className='relative flex flex-col items-center w-full'>
      <AddButton onClick={() => {}} label='README 등록하기' className='absolute right-40' />

      <div className='flex flex-wrap justify-center gap-6 mt-10'>
        {mockReadmeCards.map((mockReadmeCard) => (
          <ReadmeCard key={mockReadmeCard.id} {...mockReadmeCard} />
        ))}
      </div>
    </div>
  )
}

export default Contents
