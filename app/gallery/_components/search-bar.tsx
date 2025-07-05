'use client'

import { Input } from '@/components/ui'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

const SearchBar = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [keyword, setKeyword] = useState(searchParams.get('q') || '')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const params = new URLSearchParams(searchParams)
    if (keyword) {
      params.set('q', keyword)
    } else {
      params.delete('q')
    }

    router.push(`?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className='relative'>
      <Search
        size={16}
        className='absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground'
      />
      <Input
        className='w-xl rounded-full pl-12'
        placeholder='찾으시는 README를 입력해주세요.'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </form>
  )
}

export default SearchBar
