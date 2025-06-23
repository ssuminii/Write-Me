import clsx from 'clsx'

interface TagProps {
  label: string
  selected?: boolean
  onClick?: () => void
  className?: string
}

export const Tag = ({ label, selected = false, onClick, className }: TagProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={clsx(
        'w-fit text-sm px-4 py-1 rounded-full border transition-colors',
        className,
        selected
          ? 'bg-primary text-white hover:cursor-pointer'
          : 'hover:bg-primary hover:text-white hover:cursor-pointer'
      )}
    >
      # {label}
    </button>
  )
}
