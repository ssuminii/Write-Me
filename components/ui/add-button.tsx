'use client'

import { Plus } from 'lucide-react'

interface AddButtonProps {
  label: string
  onClick?: () => void
  className?: string
}

export const AddButton = ({ label, onClick, className }: AddButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`flex items-center gap-1 text-sm cursor-pointer text-gray-500 hover:text-gray-700 ${className}`}
    >
      <Plus size={14} />
      {label}
    </button>
  )
}
