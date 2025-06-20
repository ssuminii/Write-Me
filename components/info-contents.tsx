import FileActions from '@/components/file-actions'
import { Card } from '@/components/ui'
import { Menu, CircleMinus, CirclePlus } from 'lucide-react'

interface InfoContentsProps {
  markdown: string
}

const InfoContents = ({ markdown }: InfoContentsProps) => {
  return (
    <Card className='flex flex-col gap-4 p-6 bg-muted/20'>
      <h1 className='text-center mb-2 text-xl font-semibold'>🛠 Write-Me 이렇게 써보세요!</h1>
      <ul className='flex flex-col gap-4 text-sm leading-relaxed'>
        <li className='flex items-center gap-2'>
          <Menu size={20} />
          항목 왼쪽의 아이콘을 눌러서 순서를 바꿀 수 있어요.
        </li>
        <li className='flex items-center gap-2'>
          <CircleMinus size={20} /> /
          <CirclePlus size={20} />
          버튼으로 항목을 삭제하거나 추가할 수 있어요.
        </li>
      </ul>
      <FileActions markdown={markdown} />
    </Card>
  )
}

export default InfoContents
