'use client'

import { useState } from 'react'
import { Tag } from './'

interface TagListProps {
  tags: string[]
  className?: string
  onRemove?: (label: string) => void
  selectable?: boolean
}

export const TagList = ({ tags, className, onRemove, selectable }: TagListProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const handleToggle = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className='flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <Tag
          key={tag}
          label={tag}
          selected={selectable ? selectedTags.includes(tag) : false}
          onClick={() => {
            if (selectable) handleToggle(tag)
          }}
          onRemove={selectable ? undefined : () => onRemove?.(tag)}
          className={className}
        />
      ))}
    </div>
  )
}
