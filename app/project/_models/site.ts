export interface SiteInfo {
  name: string
  link: string
}

export interface SiteProps extends SiteInfo {
  onChange: (value: SiteInfo) => void
}