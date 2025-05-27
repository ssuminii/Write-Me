import type { RolesProps } from '../../_models'
import RoleInputCard from './role-input-card'

const Roles = ({ roles, onRolesChange }: RolesProps) => {
  const handleAddRole = () => {
    onRolesChange([...roles, { id: Date.now(), name: '', role: '' }])
  }

  const handleRemoveRole = (id: number) => {
    onRolesChange(roles.filter((role) => role.id !== id))
  }

  const handleChange = (id: number, field: 'name' | 'role', value: string) => {
    const updated = roles.map((role) => (role.id === id ? { ...role, [field]: value } : role))
    onRolesChange(updated)
  }

  return (
    <div className='flex flex-col gap-4'>
      {roles.map((role, idx) => (
        <RoleInputCard
          key={role.id}
          value={role}
          onChange={(field, val) => handleChange(role.id, field, val)}
          onAdd={handleAddRole}
          onRemove={() => handleRemoveRole(role.id)}
          isRemovable={idx !== 0}
        />
      ))}
    </div>
  )
}

export default Roles
