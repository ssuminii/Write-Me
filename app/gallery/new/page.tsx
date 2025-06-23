import Markdown from '@/components/markdown'
import { Button, UnderlineInput } from '@/components/ui'

const Page = () => {
  return (
    <div className='flex flex-col gap-10 h-screen pt-10 relative'>
      <div className='flex flex-col gap-4 ml-10'>
        <UnderlineInput placeholder='Title을 입력해주세요' />
        <input placeholder='태그를 입력해주세요' className='focus:outline-none w-[200px]' />
      </div>
      <div className='flex gap-2 fixed bottom-10 right-10 z-50'>
        <Button className='bg-white text-primary hover:bg-gray-200'>임시저장</Button>
        <Button>등록하기</Button>
      </div>
      <Markdown value='##' className='flex-1' />
    </div>
  )
}

export default Page
