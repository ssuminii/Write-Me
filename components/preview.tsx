'use client'

import { useTheme } from 'next-themes'
import MDEditor from '@uiw/react-md-editor'

interface PreviewProps {
  source: string | undefined
}

const Preview = ({ source }: PreviewProps) => {
  const { theme, systemTheme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme
  const mode = currentTheme === 'dark' ? 'dark' : 'light'

  return (
    <section data-color-mode={mode} className='border p-8'>
      <MDEditor.Markdown source={source} />
    </section>
  )
}

export default Preview
