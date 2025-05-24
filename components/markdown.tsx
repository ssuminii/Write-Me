'use client'

import MDEditor from '@uiw/react-md-editor'

interface MarkdownProps {
  className: string
  value: string
  onChange: (value: string) => void
}

const Markdown = ({ className, value, onChange }: MarkdownProps) => {
  return (
    <div className={className}>
      <MDEditor value={value} onChange={(val) => onChange(val || '')} height='100%' />
    </div>
  )
}

export default Markdown
