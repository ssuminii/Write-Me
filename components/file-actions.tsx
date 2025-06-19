import { Card, IconButton } from '@/components/ui'
import { Copy, Download } from 'lucide-react'

const FileActions = () => {
  return (
    <Card className='flex flex-col gap-3 p-4 bg-muted/30'>
      <h2 className='text-base font-semibold'>README 저장</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='flex items-center justify-center gap-3 rounded-lg border p-3 shadow-sm'>
          <span className='text-sm text-center'>
            마크다운 파일 <br /> 다운로드
          </span>
          <IconButton icon={Download} text='Download' />
        </div>
        <div className='flex items-center justify-center gap-3 rounded-lg border p-3 shadow-sm'>
          <span className='text-sm text-center'>
            마크다운 <br /> 복사
          </span>
          <IconButton icon={Copy} text='Copy' />
        </div>
      </div>
    </Card>
  )
}

export default FileActions
