import clsx from 'clsx'
import { X } from 'lucide-react'

interface TagProps {
  label: string
  selected?: boolean
  onClick?: () => void
  onRemove?: () => void
  className?: string
  isDefault?: boolean
}

export const Tag = ({
  label,
  selected = false,
  onClick,
  onRemove,
  className,
  isDefault,
}: TagProps) => {
  const baseClass =
    'flex gap-2 items-center justify-between w-fit text-sm px-4 py-1 rounded-full border transition-colors'

  return (
    <button
      type='button'
      onClick={onClick}
      className={clsx(
        baseClass,
        {
          'bg-primary text-white': selected,
          'cursor-pointer': !isDefault && !onRemove,
        },
        className
      )}
    >
      # {label}
      {onRemove && <X size={12} strokeWidth={3} onClick={onRemove} className='cursor-pointer' />}
    </button>
  )
}
