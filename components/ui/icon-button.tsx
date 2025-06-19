import { Button } from '@/components/ui/button'
import type { LucideIcon } from 'lucide-react'

interface IconButtonProps {
  icon: LucideIcon
  text: string
  onClick?: () => void
}

export const IconButton = ({ icon: Icon, text, onClick }: IconButtonProps) => {
  return (
    <Button className='w-[120px]' onClick={onClick}>
      <Icon size={22} /> {text}
    </Button>
  )
}
