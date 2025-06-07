import { Input, Label } from '@/components/ui'

interface PeriodInputProps {
  id: string
  label: string
  startValue: string
  endValue: string
  start: (value: string) => void
  end: (value: string) => void
}

export const PeriodInput = ({ id, label, startValue, endValue, start, end }: PeriodInputProps) => {
  const startId = `start-${id}`
  const endId = `end-${id}`

  return (
    <div className='flex flex-col gap-3'>
      <Label htmlFor={startId}>{label}</Label>
      <div className='flex gap-6 items-center'>
        <Input
          type='date'
          id={startId}
          value={startValue}
          onChange={(e) => start?.(e.target.value)}
        />
        ~
        <Input type='date' id={endId} value={endValue} onChange={(e) => end?.(e.target.value)} />
      </div>
    </div>
  )
}
