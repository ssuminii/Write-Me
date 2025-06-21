import { Input } from '@/components/ui'
import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div className='relative'>
      <Search
        size={16}
        className='absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground'
      />
      <Input className='w-xl rounded-full pl-12' placeholder='찾으시는 README를 입력해주세요.' />
    </div>
  )
}

export default SearchBar
