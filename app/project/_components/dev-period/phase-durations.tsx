'use client'

import type { PhaseDurationsProps } from '../../_models'
import DateInputCard from './date-input-card'
import { CalendarPlus } from 'lucide-react'

const PhaseDurations = ({ phases, onChange }: PhaseDurationsProps) => {
  const handleAddPhase = () => {
    onChange([...phases, { id: Date.now(), name: '', start: '', end: '' }])
  }

  const handleRemovePhase = (id: number) => {
    onChange(phases.filter((phase) => phase.id !== id))
  }

  const handleChange = (id: number, field: 'name' | 'start' | 'end', value: string) => {
    const updated = phases.map((phase) => (phase.id === id ? { ...phase, [field]: value } : phase))
    onChange(updated)
  }

  return (
    <div className='flex flex-col gap-4'>
      <header className='flex items-center gap-2'>
        <CalendarPlus size={20} /> 세부 기간
      </header>

      {phases.map((phase, idx) => (
        <DateInputCard
          key={phase.id}
          value={phase}
          onChange={(field, val) => handleChange(phase.id, field, val)}
          onAdd={handleAddPhase}
          onRemove={() => handleRemovePhase(phase.id)}
          isRemovable={idx !== 0}
        />
      ))}
    </div>
  )
}

export default PhaseDurations
