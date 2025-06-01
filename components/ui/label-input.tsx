import { Input } from './input'

interface LabelInputProps {
  id: string
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
}

export const LabelInput = ({ id, label, placeholder, value, onChange }: LabelInputProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={id}>{label}</label>
      <Input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}
