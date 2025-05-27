import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import type { RemovableItemControls } from '@/types'
import { SquarePlus, SquareMinus } from 'lucide-react'

interface AddRolesProps extends RemovableItemControls {
  value: {
    name: string
    role: string
  }
  onChange: (field: 'name' | 'role', val: string) => void
}

const RoleInputCard = ({ onAdd, onRemove, isRemovable, value, onChange }: AddRolesProps) => {
  return (
    <Card className='p-10'>
      <form className='flex items-center gap-8'>
        <div className='flex flex-col gap-8 flex-1'>
          <div className='flex items-center gap-6'>
            <label htmlFor='member-name' className='w-18'>
              팀원명
            </label>
            <Input
              id='member-name'
              placeholder='팀원명을 입력해주세요.'
              value={value.name}
              onChange={(e) => onChange('name', e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-4'>
            <label htmlFor='member-role'>담당 역할 및 기능</label>
            <Textarea
              id='member-role'
              placeholder={`• 공통 컴포넌트 : Input, Profile, Tag, Checkbox\n\n• 페이지 : 로그인, 회원가입, 마이페이지, 프로필 수정\n\n• 기능 구현\n  - 로그인, 회원가입 시 유효성 및 중복 검사\n  - 해시태그 선택\n  - 댓글 조회 및 수정 삭제`}
              value={value.role}
              onChange={(e) => onChange('role', e.target.value)}
              className='h-[200px]'
            />
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
  )
}

export default RoleInputCard
