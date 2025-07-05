'use client'

import { ReadmeCard } from './'
import { AddButton } from '@/components/ui'
import type { CreateReadme } from '@/types'
import { useRouter } from 'next/navigation'

interface ContentsProps {
  readmes: CreateReadme[]
}

const Contents = ({ readmes }: ContentsProps) => {
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
        {readmes.map((readme) => (
          <ReadmeCard key={readme.id} {...readme} />
        ))}
      </div>
    </div>
  )
}

export default Contents
