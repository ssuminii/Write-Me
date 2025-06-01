'use client'

import MDEditor from '@uiw/react-md-editor'

interface MarkdownProps {
  className: string
  value: string
}

const Markdown = ({ className, value }: MarkdownProps) => {
  return (
    <div className={className}>
      <MDEditor value={value} height='100%' />
    </div>
  )
}

export default Markdown
