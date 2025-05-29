import { Input } from '@/components/ui'
import { RemovableItemControls } from '@/types'
import { SquarePlus, SquareMinus } from 'lucide-react'

interface AddStacksProps extends RemovableItemControls {
  value: {
    stack: string
    reason: string
  }
  onChange: (field: 'stack' | 'reason', val: string) => void
}

const StackInputCard = ({ onAdd, onRemove, isRemovable, value, onChange }: AddStacksProps) => {
  return (
    <div className='flex items-center gap-6'>
      <Input
        placeholder='기술 스택'
        value={value.stack}
        onChange={(e) => onChange('stack', e.target.value)}
        className='flex-1'
      />
      <Input
        placeholder='도입 이유'
        value={value.reason}
        onChange={(e) => onChange('reason', e.target.value)}
        className='flex-3'
      />

      {isRemovable ? (
        <SquareMinus
          onClick={onRemove}
          className='text-destructive cursor-pointer hover:text-destructive-hover'
        />
      ) : (
        <SquarePlus onClick={onAdd} className='text-ring cursor-pointer hover:text-gray-500' />
      )}
    </div>
  )
}

export default StackInputCard
