'use client'

import { LikeButton } from './like-button'
import { toast } from 'sonner'
import { useAuthStore } from '@/stores/useAuthStore'
import { useLikeMutation, useLikeStatus, useUnlikeMutation } from '@/hooks/queries'

interface LikeButtonContainerProps {
  readmeId: string
  onClick?: () => void
  className?: string
}

export const LikeButtonContainer = ({ readmeId, className }: LikeButtonContainerProps) => {
  const user = useAuthStore((state) => state.user)

  const { data } = useLikeStatus(readmeId, user)
  const likeMutation = useLikeMutation(readmeId, user)
  const unlikeMutation = useUnlikeMutation(readmeId, user)

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    if (!user) {
      toast.error('로그인이 필요한 기능입니다.')
      return
    }

    if (data?.liked) {
      unlikeMutation.mutate()
    } else {
      likeMutation.mutate()
    }
  }

  return (
    <LikeButton
      liked={data?.liked}
      count={data?.count ?? 0}
      onClick={handleClick}
      className={className}
    />
  )
}
