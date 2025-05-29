import { ReactNode } from 'react'
import { Card } from './ui/card'
import { SquarePlus, SquareMinus } from 'lucide-react'

interface InputCardProps {
  children: ReactNode
  isRemovable?: boolean
  onAdd?: () => void
  onRemove?: () => void
}

const InputCard = ({ children, isRemovable, onAdd, onRemove }: InputCardProps) => {
  return (
    <Card className='flex flex-row items-center gap-8 p-10'>
      <div className='flex flex-col gap-6 flex-1'>{children} </div>
      {isRemovable ? (
        <SquareMinus
          onClick={onRemove}
          className='text-destructive cursor-pointer hover:text-destructive-hover'
        />
      ) : (
        <SquarePlus onClick={onAdd} className='text-ring cursor-pointer hover:text-gray-500' />
      )}
    </Card>
  )
}

export default InputCard
