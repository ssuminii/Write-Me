import { Heart } from 'lucide-react'
import clsx from 'clsx'

interface LikeButtonProps {
  count: number
  liked?: boolean
  onClick?: () => void
  className?: string
}

export const LikeButton = ({ count, liked, onClick, className }: LikeButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`flex items-center gap-1 text-sm text-gray-600 cursor-pointer transition-colors ${className}`}
    >
      <Heart
        size={18}
        className={clsx(
          'text-sm flex items-center gap-1',
          liked ? 'fill-red-400 text-red-400' : 'text-gray-400',
          'hover:text-red-400 transition-colors'
        )}
      />
      <span>{count}</span>
    </button>
  )
}
