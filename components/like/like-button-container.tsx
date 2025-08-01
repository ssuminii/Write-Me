'use client'

import { LikeButton } from './like-button'
import { toast } from 'sonner'
import { useAuthStore } from '@/stores/useAuthStore'
import { useLikeMutation, useUnlikeMutation } from '@/hooks/queries'

interface LikeButtonContainerProps {
  readmeId: string
  readmeIds?: string[]
  liked?: boolean
  count?: number
  onClick?: () => void
  className?: string
}

export const LikeButtonContainer = ({
  readmeId,
  readmeIds,
  liked,
  count,
  className,
}: LikeButtonContainerProps) => {
  const user = useAuthStore((state) => state.user)
  const likeMutation = useLikeMutation(readmeId, user, readmeIds ?? [])
  const unlikeMutation = useUnlikeMutation(readmeId, user, readmeIds ?? [])

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    if (!user) {
      toast.error('로그인이 필요한 기능입니다.')
      return
    }

    if (liked) {
      unlikeMutation.mutate()
    } else {
      likeMutation.mutate()
    }
  }

  return <LikeButton liked={liked} count={count ?? 0} onClick={handleClick} className={className} />
}
