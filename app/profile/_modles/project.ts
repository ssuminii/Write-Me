export interface Project {
  id: number
  title: string
  desc: string
  link: string
}

export interface ProjectsProps {
  projects: Project[]
  onProjectsChange: ((projects: Project[]) => void )
}