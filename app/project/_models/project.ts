import type { SiteInfo } from '../_models/site'

export interface ProjectState {
  title: string
  overview: string
  site: SiteInfo
  folderStructure: string
}

export interface ProjectHandlers {
  onTitleChange: (value: string) => void
  onOverviewChange: (value: string) => void
  onSiteChange: (value: SiteInfo) => void
  onImageUpload: (html: string) => void
  onFolderStructureChange: (value: string) => void
}