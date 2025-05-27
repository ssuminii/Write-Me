import { Input } from '@/components/ui/input'
import type { RemovableItemControls } from '@/types'
import { SquarePlus, SquareMinus } from 'lucide-react'

interface RowInputCardProps extends RemovableItemControls {
  value: {
    name: string
    start: string
    end: string
  }
  onChange: (field: 'name' | 'start' | 'end', val: string) => void
}

const DateInputCard = ({ onAdd, onRemove, isRemovable, value, onChange }: RowInputCardProps) => {
  return (
    <div className='flex gap-6 items-center'>
      <Input
        placeholder='디자인'
        value={value.name}
        onChange={(e) => onChange('name', e.target.value)}
        className='flex-1'
      />
      <Input
        type='date'
        value={value.start}
        onChange={(e) => onChange('start', e.target.value)}
        className='flex-1'
      />
      ~
      <Input
        type='date'
        value={value.end}
        onChange={(e) => onChange('end', e.target.value)}
        className='flex-1'
      />
      {isRemovable ? (
        <SquareMinus
          onClick={onRemove}
          className='text-destructive cursor-pointer hover:text-destructive-hover'
        />
      ) : (
        <SquarePlus onClick={onAdd} className='text-gray-300 cursor-pointer hover:text-gray-400' />
      )}
    </div>
  )
}

export default DateInputCard
