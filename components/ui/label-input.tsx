import HelpText from './help-text'
import { Input, Label } from './'

type Position = 'row' | 'col'

interface LabelInputProps {
  id: string
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  pos?: Position
  labelWidth?: number
  helpText?: string
}

export const LabelInput = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  labelWidth,
  pos = 'col',
  helpText,
}: LabelInputProps) => {
  const isRow = pos === 'row'

  return (
    <div className={isRow ? 'flex items-center gap-4' : 'flex flex-col gap-3'}>
      <Label htmlFor={id} className={labelWidth ? `w-${labelWidth}` : ''}>
        {label}
      </Label>
      <div className='flex-1 relative'>
        <Input
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={isRow ? 'flex-1' : ''}
        />
        {helpText && <HelpText helpText={helpText} />}
      </div>
    </div>
  )
}
