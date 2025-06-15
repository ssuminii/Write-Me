'use client'

import MDEditor from '@uiw/react-md-editor'
import { useTheme } from 'next-themes'
import { useMounted } from '@/hooks'

interface MarkdownProps {
  className: string
  value: string
}

const Markdown = ({ className, value }: MarkdownProps) => {
  const { theme, systemTheme } = useTheme()
  const mounted = useMounted()

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme
  const mode = currentTheme === 'dark' ? 'dark' : 'light'

  return (
    <div className={className} data-color-mode={mode}>
      <MDEditor value={value} height='100%' />
    </div>
  )
}

export default Markdown
