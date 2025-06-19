import { Button } from '@/components/ui'
import { Copy } from 'lucide-react'

const CopyBtn = () => {
  return (
    <Button className='w-[120px]'>
      <Copy size={22} /> Copy
    </Button>
  )
}

export default CopyBtn
