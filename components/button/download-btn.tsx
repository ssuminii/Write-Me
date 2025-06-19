import { Button } from '@/components/ui'
import { Download } from 'lucide-react'

const DownloadBtn = () => {
  return (
    <Button className='w-[120px]'>
      <Download size={22} />
      Download
    </Button>
  )
}

export default DownloadBtn
