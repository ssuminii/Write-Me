const HTML_IMG = /(<img[^>]*?\ssrc=["'])(?!https?:|data:|\/\/)([^"']+)/gi
const MD_IMG = /(!\[[^\]]*\]\()(?!https?:|data:|\/\/|#)([^)\s]+)/g

export function absolutizeImages(markdown: string, rawBase: string): string {
  const toAbsolute = (_: string, prefix: string, path: string) =>
    `${prefix}${rawBase}/${path.replace(/^\.?\//, '')}`
  return markdown.replace(HTML_IMG, toAbsolute).replace(MD_IMG, toAbsolute)
}
