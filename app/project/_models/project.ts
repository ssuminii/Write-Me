import type { Member, Phase, SiteInfo, TotalDurationInfo, Stack, Role, Featrue, ImageUpload } from '../_models'

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
  features: Featrue[]
  imageUpload: ImageUpload
}

export interface ProjectHandlers {
  onTitleChange: (value: string) => void
  onOverviewChange: (value: string) => void
  onSiteChange: (value: SiteInfo) => void
  onFolderStructureChange: (value: string) => void
  onDurationChange: (v: TotalDurationInfo) => void
  onPhasesChange: (phases: Phase[]) => void
  onMembersChange: (members: Member[]) => void
  onStacksChange: (stacks: Stack[]) => void
  onRolesChange: (roles: Role[]) => void
  onFeaturesChange: (features: Featrue[]) => void
  onImageUploadChange: (imageUpload: ImageUpload) => void
}