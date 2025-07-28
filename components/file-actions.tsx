'use client'

import { IconButton } from '@/components/ui'
import { Copy, Download } from 'lucide-react'
import { toast } from 'sonner'

interface FileActionsProps {
  markdown: string
}

const FileActions = ({ markdown }: FileActionsProps) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown)
      toast.success('복사가 완료되었습니다! ✨')
    } catch (err) {
      console.error(err)
      toast.error('앗, 복사에 실패했어요. 다시 시도해주세요 😢')
    }
  }

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'README.md'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
      <div className='flex items-center justify-center gap-3 rounded-lg border p-3 shadow-sm'>
        <span className='text-sm text-center'>
          마크다운 file <br /> 다운로드
        </span>
        <IconButton icon={Download} text='Download' onClick={handleDownload} />
      </div>
      <div className='flex items-center justify-center gap-3 rounded-lg border p-3 shadow-sm'>
        <span className='text-sm text-center'>
          마크다운 <br /> 복사
        </span>
        <IconButton icon={Copy} text='Copy' onClick={handleCopy} />
      </div>
    </div>
  )
}

export default FileActions
