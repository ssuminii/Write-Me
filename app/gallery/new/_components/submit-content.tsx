import {
  Button,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  TagList,
} from '@/components/ui'
import { ImagePlus } from 'lucide-react'

const SubmitContent = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>README Preview</DialogTitle>
      </DialogHeader>
      <div className='flex flex-col'>
        <div className='self-end'>
          <Button variant='link'>재업로드</Button>
          <Button variant='link'>제거</Button>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center w-full border rounded-md p-10 bg-gray-200 mb-2'>
          <ImagePlus size={60} color='gray' />
          <Button variant='secondary' className='font-semibold'>
            Upload Thumbnail
          </Button>
        </div>
        <h2 className='font-semibold text-2xl mb-2'>Profile README ✨</h2>
        <TagList tags={['Frontend', 'Profile']} />
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant='outline'>취소</Button>
        </DialogClose>
        <Button type='submit'>등록하기</Button>
      </DialogFooter>
    </>
  )
}

export default SubmitContent
