'use client'

import { UniqueIdentifier } from '@dnd-kit/core'
import { useState } from 'react'

export const useCardCollapse = () => {
  const [collapse, setCollapse] = useState<Record<string, boolean>>({})

  const onToggleCollapse = (id: UniqueIdentifier) => {
    setCollapse((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return { collapse, onToggleCollapse }
}
