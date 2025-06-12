import HelpText from './help-text'
import { Input, Label } from './'

type Position = 'row' | 'col'

interface BaseProps {
  label: string
  onChange: (value: string) => void
  pos?: Position
  labelWidth?: number
  helpText?: string
}

type LabelInputProps = Omit<React.ComponentProps<'input'>, 'onChange'> & BaseProps

export const LabelInput = ({
  label,
  onChange,
  labelWidth,
  pos = 'col',
  helpText,
  ...restProps
}: LabelInputProps) => {
  const isRow = pos === 'row'

  return (
    <div className={isRow ? 'flex items-center gap-4' : 'flex flex-col gap-3'}>
      <Label htmlFor={label} className={labelWidth ? `w-${labelWidth}` : ''}>
        {label}
      </Label>
      <div className='flex-1 relative'>
        <Input
          onChange={(e) => onChange(e.target.value)}
          className={isRow ? 'flex-1' : ''}
          {...restProps}
        />
        {helpText && <HelpText helpText={helpText} />}
      </div>
    </div>
  )
}
