'use client'

import { useState } from 'react'
import { Tag } from './'

interface TagListProps {
  tags: string[] | undefined
  className?: string
  onRemove?: (label: string) => void
  selectable?: boolean
  isDefault?: boolean
}

export const TagList = ({ tags, className, onRemove, selectable, isDefault }: TagListProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const handleToggle = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const handleClick = (tag: string) => {
    if (selectable) handleToggle(tag)
  }

  return (
    <div className='flex flex-wrap gap-2'>
      {tags?.map((tag) => (
        <Tag
          key={tag}
          label={tag}
          selected={selectable ? selectedTags.includes(tag) : false}
          onClick={() => {
            handleClick(tag)
          }}
          onRemove={selectable || isDefault ? undefined : () => onRemove?.(tag)}
          className={className}
          isDefault={isDefault}
        />
      ))}
    </div>
  )
}
