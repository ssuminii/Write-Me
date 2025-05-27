import type { Member } from '@/app/project/_models/members'
import type { Phase, SiteInfo, TotalDurationInfo, Stack, Role } from '../_models'

export interface ProjectState {
  title: string
  overview: string
  site: SiteInfo
  folderStructure: string
  duration: TotalDurationInfo
  phases: Phase[]
  members: Member[]
  stacks: Stack[]
  roles: Role[]
}

export interface ProjectHandlers {
  onTitleChange: (value: string) => void
  onOverviewChange: (value: string) => void
  onSiteChange: (value: SiteInfo) => void
  onImageUpload: (html: string) => void
  onFolderStructureChange: (value: string) => void
  onDurationChange: (v: TotalDurationInfo) => void
  onPhasesChange: (phases: Phase[]) => void
  onMembersChange: (members: Member[]) => void
  onStacksChange: (stacks: Stack[]) => void
  onRolesChange: (roles: Role[]) => void
  onToggleCollapse: (id: string) => void
}