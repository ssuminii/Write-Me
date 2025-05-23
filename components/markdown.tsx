'use client'

import { useState } from 'react'
import MDEditor from '@uiw/react-md-editor'

interface MarkdownProps {
  className: string
}

const Markdown = ({ className }: MarkdownProps) => {
  const [markdown, setMarkdown] = useState<string>('')

  return (
    <div className={className}>
      <MDEditor value={markdown} onChange={(val) => setMarkdown(val || '')} height='100%' />
    </div>
  )
}

export default Markdown
