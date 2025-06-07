export interface CapsuleRender {
  type: string
  height: string
  background: string
  text: string
  textColor: string
  textAnimation: string
  theme: string
}

export interface CapsuleRenderProps {
  capsuleRender: CapsuleRender
  onCapsuleRenderChange: ((capsuleRender: CapsuleRender) => void)
}