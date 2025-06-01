export interface ProfileState {
  introduce: string
}

export interface ProfileHandlers {
  onIntroduceChange: (value: string) => void
}