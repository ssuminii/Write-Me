'use client'

import { ReadmeCard } from './'
import { AddButton } from '@/components/ui'
import { useReadmesQuery } from '@/hooks/queries'
import type { CreateReadme } from '@/types'
import { useRouter } from 'next/navigation'
import { useBatchLikeStatus } from '@/hooks/queries'
import { useAuthStore } from '@/stores/useAuthStore'

interface ContentsProps {
  keyword: string
  readmes: CreateReadme[]
}

const Contents = ({ keyword, readmes }: ContentsProps) => {
  const router = useRouter()
  const { data } = useReadmesQuery(keyword, readmes)
  const user = useAuthStore((state) => state.user)

  const readmeIds = data?.map((r) => r.id) ?? []
  const { data: likeStatuses } = useBatchLikeStatus(readmeIds, user)

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
        {data?.map((data) => {
          const status = likeStatuses?.find((s) => s.readmeId === data.id)
          return (
            <ReadmeCard
              key={data.id}
              {...data}
              readmeIds={readmeIds}
              liked={status?.liked ?? false}
              count={status?.count ?? 0}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Contents
