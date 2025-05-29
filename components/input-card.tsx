import { ReactNode } from 'react'
import { Card } from './ui/card'
import { SquarePlus } from 'lucide-react'

interface InputCardProps {
  children: ReactNode
}

const InputCard = ({ children }: InputCardProps) => {
  return (
    <Card className='flex flex-row gap-8 p-10'>
      <div className='flex flex-col gap-8 flex-1'>{children} </div>
      <SquarePlus className='text-ring cursor-pointer hover:text-gray-500' />
    </Card>
  )
}

export default InputCard
