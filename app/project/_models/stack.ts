export interface Stack {
  id: number
  stack: string
  reason: string
  style: string,
  bgColor: string,
  iconColor: string
}

export interface StacksProps {
  stacks: Stack[]
  onStacksChange: (stacks: Stack[]) => void
}