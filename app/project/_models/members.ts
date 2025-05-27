export interface Member {
  id: number
  role: string
  name: string
  github: string
}

export interface TeamMembersProps {
  members: Member[]
  onMembersChange: (members: Member[]) => void
}