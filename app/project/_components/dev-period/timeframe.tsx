import PhaseDurations from '@/app/project/_components/dev-period/phase-durations'
import TotalDuration from '@/app/project/_components/dev-period/total-duration'
import type { TimeframeProps } from '../../_models'

const Timeframe = ({ start, end, onChange, phases, onPhasesChange }: TimeframeProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <TotalDuration start={start} end={end} onChange={onChange} />
      <PhaseDurations phases={phases} onChange={onPhasesChange} />
    </div>
  )
}

export default Timeframe
