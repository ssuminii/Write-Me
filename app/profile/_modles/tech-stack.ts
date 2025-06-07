export interface TechStack {
  id: number
  style: string
  name: string
  bgColor: string
  logoColor: string
}

export interface TechStacksProps {
  techStacks: TechStack[]
  onTechStacksChange: ((techStacks: TechStack[]) => void)
}