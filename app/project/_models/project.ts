import { Member } from '@/app/project/_models/members'
import type { Phase, SiteInfo, TotalDurationInfo } from '../_models'

export interface ProjectState {
  title: string
  overview: string
  site: SiteInfo
  folderStructure: string
  duration: TotalDurationInfo
  phases: Phase[]
  members: Member[]
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
}