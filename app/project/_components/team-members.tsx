'use client'

import type { TeamMembersProps } from '../_models'
import { useDynamicList } from '@/hooks/useDynamicList'
import InputCard from '@/components/input-card'
import { LabelInput } from '@/components/ui'

const TeamMembers = ({ members, onMembersChange }: TeamMembersProps) => {
  const { handleAdd, handleRemove, handleChange } = useDynamicList(members, onMembersChange, {
    role: '',
    name: '',
    github: '',
  })

  return (
    <div className='flex flex-col gap-4'>
      {members.map((member, idx) => (
        <InputCard
          key={member.id}
          onAdd={handleAdd}
          onRemove={() => handleRemove(member.id)}
          isRemovable={idx !== 0}
        >
          <LabelInput
            label='역할'
            value={member.role}
            onChange={(value) => handleChange(member.id, 'role', value)}
            placeholder='FE-Developer'
            pos='row'
            labelWidth={24}
          />
          <LabelInput
            label='이름'
            value={member.name}
            onChange={(value) => handleChange(member.id, 'name', value)}
            placeholder='김수민'
            pos='row'
            labelWidth={24}
          />
          <LabelInput
            label='깃허브 아이디'
            value={member.github}
            onChange={(value) => handleChange(member.id, 'github', value)}
            placeholder='ssuminii'
            pos='row'
            labelWidth={24}
          />
        </InputCard>
      ))}
    </div>
  )
}

export default TeamMembers
