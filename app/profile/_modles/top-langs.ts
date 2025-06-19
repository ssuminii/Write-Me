export interface TopLangs {
  id: string
  layout: string
}

export interface TopLangsProps {
  topLangs: TopLangs
  onTopLangsChange: ((topLangs: TopLangs) => void)
}