import { Project } from '../_modles/project'

export interface ProfileState {
  introduce: string
  projects: Project[]
}

export interface ProfileHandlers {
  onIntroduceChange: (value: string) => void
  onProjectsChange: (value: Project[]) => void
}