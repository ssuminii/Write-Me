'use client'

import type { StacksProps } from '../../_models'
import StackInputCard from './stack-input-card'

const Stack = ({ stacks, onStacksChange }: StacksProps) => {
  const handleAddStack = () => {
    onStacksChange([...stacks, { id: Date.now(), stack: '', reason: '' }])
  }

  const handleRemoveStack = (id: number) => {
    onStacksChange(stacks.filter((stack) => stack.id !== id))
  }

  const handleChange = (id: number, field: 'stack' | 'reason', value: string) => {
    const updated = stacks.map((stack) => (stack.id === id ? { ...stack, [field]: value } : stack))
    onStacksChange(updated)
  }

  return (
    <div className='flex flex-col gap-4'>
      {stacks.map((stack, idx) => (
        <StackInputCard
          key={stack.id}
          value={stack}
          onChange={(field, val) => handleChange(stack.id, field, val)}
          onAdd={handleAddStack}
          onRemove={() => handleRemoveStack(stack.id)}
          isRemovable={idx !== 0}
        />
      ))}
    </div>
  )
}

export default Stack
