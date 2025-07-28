'use client'

import { ReadmeCard } from './'
import { AddButton } from '@/components/ui'
import { useReadmesQuery } from '@/hooks/queries'
import { useRouter } from 'next/navigation'

interface ContentsProps {
  keyword: string
}

const Contents = ({ keyword }: ContentsProps) => {
  const router = useRouter()
  const { data } = useReadmesQuery(keyword)

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
        {data?.map((data) => (
          <ReadmeCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  )
}

export default Contents
