export interface Role {
  id: number
  name: string
  role: string
}

export interface RolesProps {
  roles: Role[]
  onRolesChange: (roles: Role[]) => void
}