import { cn } from '@/lib/utils'
import { Card } from './card'

interface OrbCardProps extends React.ComponentProps<'button'> {
  title: string
  description: string
  color: string
}

export function OrbCard({ title, description, color, className, ...props }: OrbCardProps) {
  return (
    <button type='button' className={cn('w-full text-left', className)} {...props}>
      <Card className='flex-row items-center gap-3 rounded-2xl p-4 shadow-none'>
        <span
          aria-hidden
          className='size-11 shrink-0 rounded-full'
          style={{ background: `radial-gradient(circle at 35% 30%, white, ${color} 60%)` }}
        />
        <span>
          <b className='block'>{title}</b>
          <span className='text-sm text-foreground/50'>{description}</span>
        </span>
      </Card>
    </button>
  )
}
