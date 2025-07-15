'use client'

import { useEffect, useState } from 'react'
import { likeReadme, unlikeReadme, getLikeStatus } from '@/lib/supabase/likes'
import { LikeButton } from './like-button'
import { toast } from 'sonner'

interface LikeButtonContainerProps {
  readmeId: string
  onClick?: () => void
  className?: string
}

export const LikeButtonContainer = ({ readmeId, className }: LikeButtonContainerProps) => {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchStatus = async () => {
      const { liked, count } = await getLikeStatus(readmeId)
      setLiked(liked)
      setCount(count)
    }
    fetchStatus()
  }, [readmeId])

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    try {
      if (liked) {
        await unlikeReadme(readmeId)
        setCount((prev) => prev - 1)
      } else {
        await likeReadme(readmeId)
        setCount((prev) => prev + 1)
      }
      setLiked(!liked)
    } catch (error) {
      console.error(error)
      toast.error('로그인이 필요한 기능입니다.')
    }
  }

  return <LikeButton liked={liked} count={count} onClick={handleClick} className={className} />
}
