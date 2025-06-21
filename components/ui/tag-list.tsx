'use client'

import { useState } from 'react'
import { Tag } from './'

interface TagListProps {
  tags: string[]
}

export const TagList = ({ tags }: TagListProps) => {
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
          selected={selectedTags.includes(tag)}
          onClick={() => handleToggle(tag)}
        />
      ))}
    </div>
  )
}
