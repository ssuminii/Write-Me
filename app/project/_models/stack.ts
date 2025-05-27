export interface Stack {
  id: number
  stack: string
  reason: string
}

export interface StacksProps {
  stacks: Stack[]
  onStacksChange: (stacks: Stack[]) => void
}