import Markdown from '@/components/markdown'
import { Button, UnderlineInput } from '@/components/ui'
import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui'
import SubmitContent from '@/app/gallery/new/_components/submit-content'

const Page = async () => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login?error=unauthorized')
  }

  return (
    <Dialog>
      <div className='flex flex-col gap-10 h-screen pt-10 relative'>
        <div className='flex flex-col gap-4 ml-10'>
          <UnderlineInput placeholder='Title을 입력해주세요' />
          <input placeholder='태그를 입력해주세요' className='focus:outline-none w-[200px]' />
        </div>
        <div className='flex gap-2 fixed bottom-10 right-10 z-50'>
          <Button variant='outline'>임시저장</Button>
          <DialogTrigger asChild>
            <Button>등록하기</Button>
          </DialogTrigger>
        </div>
        <Markdown value='##' className='flex-1 p-2' />
      </div>

      <DialogContent className='sm:max-w-[425px]'>
        <SubmitContent />
      </DialogContent>
    </Dialog>
  )
}

export default Page
