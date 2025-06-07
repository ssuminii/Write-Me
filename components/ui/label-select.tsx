import {
  Label,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from './'
import HelpText from './help-text'

type Position = 'row' | 'col'

interface LabelSelectProps {
  id: string
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  options: string[]
  pos?: Position
  labelWidth?: number
  helpText?: string
}

export const LabelSelect = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  options,
  labelWidth,
  pos = 'col',
  helpText,
}: LabelSelectProps) => {
  const isRow = pos === 'row'

  return (
    <div className={isRow ? `flex items-center gap-4` : 'flex flex-col gap-3'}>
      <Label htmlFor={id} className={labelWidth ? `w-${labelWidth}` : ''}>
        {label}
      </Label>

      <div className={isRow ? 'flex-1 relative' : 'w-full relative'}>
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger id={id} className='w-full'>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {helpText && <HelpText helpText={helpText} />}
      </div>
    </div>
  )
}
