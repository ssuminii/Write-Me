import InputCard from '@/components/input-card'
import type { RolesProps } from '../_models'
import { Label, LabelInput, Textarea } from '@/components/ui'
import { useDynamicList } from '@/hooks/useDynamicList'

const Roles = ({ roles, onRolesChange }: RolesProps) => {
  const { handleAdd, handleRemove, handleChange } = useDynamicList(roles, onRolesChange, {
    name: '',
    role: '',
  })

  return (
    <div className='flex flex-col gap-4'>
      {roles.map((role, idx) => (
        <InputCard
          key={role.id}
          onAdd={handleAdd}
          onRemove={() => handleRemove(role.id)}
          isRemovable={idx !== 0}
        >
          <LabelInput
            label='팀원명'
            value={role.name}
            onChange={(value) => handleChange(role.id, 'name', value)}
            placeholder='팀원명'
          />
          <div className='flex flex-col gap-3'>
            <Label htmlFor='member-role'>담당 역할 및 기능</Label>
            <Textarea
              id='member-role'
              placeholder={`• 공통 컴포넌트 : Input, Profile, Tag, Checkbox\n\n• 페이지 : 로그인, 회원가입, 마이페이지, 프로필 수정\n\n• 기능 구현\n  - 로그인, 회원가입 시 유효성 및 중복 검사\n  - 해시태그 선택\n  - 댓글 조회 및 수정 삭제`}
              value={role.role}
              onChange={(e) => handleChange(role.id, 'role', e.target.value)}
              className='h-[200px]'
            />
          </div>
        </InputCard>
      ))}
    </div>
  )
}

export default Roles
