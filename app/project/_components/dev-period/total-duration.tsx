import { Input } from '@/components/ui/input'
import { CalendarRange } from 'lucide-react'
import type { TotalDurationProps } from '../../_models'

const TotalDuration = ({ start, end, onChange }: TotalDurationProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <header className='flex items-center gap-2'>
        <CalendarRange size={20} /> 전체 기간
      </header>

      <div className='flex items-center gap-4'>
        <Input
          type='date'
          value={start}
          onChange={(e) => onChange({ start: e.target.value, end })}
        />
        <span>~</span>
        <Input type='date' value={end} onChange={(e) => onChange({ start, end: e.target.value })} />
      </div>
    </div>
  )
}

export default TotalDuration
