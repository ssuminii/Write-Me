import {
  Label,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from './'

type Position = 'row' | 'col'

interface LabelSelectProps {
  id: string
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  options: string[]
  pos?: Position
}

export const LabelSelect = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  options,
  pos = 'col',
}: LabelSelectProps) => {
  const isRow = pos === 'row'

  return (
    <div className={isRow ? 'flex items-center gap-4' : 'flex flex-col gap-3'}>
      <Label htmlFor={id}>{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id={id} className={isRow ? 'flex-1' : 'w-full'}>
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
    </div>
  )
}
