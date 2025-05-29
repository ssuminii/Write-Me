import InputCard from '@/components/input-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import type { RemovableItemControls } from '@/types'

interface AddMembersProps extends RemovableItemControls {
  value: {
    role: string
    name: string
    github: string
  }
  onChange: (field: 'role' | 'name' | 'github', val: string) => void
}

const AddMembers = ({ onAdd, onRemove, isRemovable, value, onChange }: AddMembersProps) => {
  return (
    <InputCard isRemovable={isRemovable} onAdd={onAdd} onRemove={onRemove}>
      <div className='flex items-center gap-6'>
        <label htmlFor='role' className='w-32'>
          역할
        </label>
        <Input
          id='role'
          placeholder='FEDeveloper'
          value={value.role}
          onChange={(e) => onChange('role', e.target.value)}
        />
      </div>

      <div className='flex items-center gap-6'>
        <label htmlFor='name' className='w-32'>
          이름
        </label>
        <Input
          id='name'
          placeholder='김수민'
          value={value.name}
          onChange={(e) => onChange('name', e.target.value)}
        />
      </div>

      <div className='flex items-center gap-6'>
        <label htmlFor='github-id' className='w-32'>
          깃허브 아이디
        </label>
        <Input
          id='github-id'
          placeholder='ssuminii'
          value={value.github}
          onChange={(e) => onChange('github', e.target.value)}
        />
      </div>

      <div className='flex items-center gap-6'>
        <div>이미지 업로드</div>
        <Button type='button'>Image Upload</Button>
      </div>
    </InputCard>
  )
}

export default AddMembers
