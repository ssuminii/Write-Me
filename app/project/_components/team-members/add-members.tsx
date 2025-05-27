import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import type { RemovableItemControls } from '@/types'
import { SquarePlus, SquareMinus } from 'lucide-react'

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
    <div>
      <Card className='p-10'>
        <form className='flex items-center gap-8'>
          <div className='flex flex-col gap-4 flex-1'>
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
          </div>

          {isRemovable ? (
            <SquareMinus
              onClick={onRemove}
              className='text-destructive cursor-pointer hover:text-destructive-hover'
            />
          ) : (
            <SquarePlus onClick={onAdd} className='text-ring cursor-pointer hover:text-gray-500' />
          )}
        </form>
      </Card>
    </div>
  )
}

export default AddMembers
