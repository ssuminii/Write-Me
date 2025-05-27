'use client'

import AddMembers from './add-members'
import { TeamMembersProps } from '../../_models'

const TeamMembers = ({ members, onMembersChange }: TeamMembersProps) => {
  const handleAddMember = () => {
    onMembersChange([...members, { id: Date.now(), role: '', name: '', github: '' }])
  }

  const handleRemoveMember = (id: number) => {
    onMembersChange(members.filter((member) => member.id !== id))
  }

  const handleChange = (id: number, field: 'role' | 'name' | 'github', value: string) => {
    const updated = members.map((member) =>
      member.id === id ? { ...member, [field]: value } : member
    )
    onMembersChange(updated)
  }

  return (
    <div className='flex flex-col gap-8'>
      {members.map((member, idx) => (
        <AddMembers
          key={member.id}
          value={member}
          onChange={(field, val) => handleChange(member.id, field, val)}
          onAdd={handleAddMember}
          onRemove={() => handleRemoveMember(member.id)}
          isRemovable={idx !== 0}
        />
      ))}
    </div>
  )
}

export default TeamMembers
