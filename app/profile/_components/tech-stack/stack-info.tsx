import Link from 'next/link'
import { Search } from 'lucide-react'

const StackInfo = () => {
  return (
    <div className='flex items-center gap-2 ml-2 hover:text-primary w-fit'>
      <Search size={16} />
      <Link href='https://simpleicons.org/' target='_blank'>
        기술 스택 색상 정보 보러가기
      </Link>
    </div>
  )
}

export default StackInfo
