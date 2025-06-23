import { Button, Textarea } from '@/components/ui'

const CommentInput = () => {
  return (
    <form className='flex flex-col gap-2'>
      <Textarea
        placeholder='댓글을 작성해보세요'
        className='border rounded-md p-2 min-h-[80px] resize-y'
      />
      <Button type='submit' className='self-end px-4 py-1'>
        등록
      </Button>
    </form>
  )
}

export default CommentInput
