'use client'

import { Button, Textarea } from '@/components/ui'
import { createComment } from '@/lib/readme'
import { useAuthStore } from '@/stores/useAuthStore'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

const CommentInput = ({ readmeId }: { readmeId: string }) => {
  const [content, setContent] = useState('')
  const user = useAuthStore((state) => state.user)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!content.trim()) return toast.error('댓글을 입력해주세요.')
    if (!user) return toast.error('로그인이 필요한 기능입니다.')

    try {
      await createComment({
        readmeId,
        content,
      })

      setContent('')
      router.refresh()
    } catch (error) {
      console.error(error)
      toast.error('댓글 등록에 실패했습니다.')
    }
  }

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <Textarea
        placeholder='댓글을 작성해보세요'
        className='border rounded-md p-2 min-h-[80px] resize-y'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type='submit' className='self-end px-4 py-1'>
        등록
      </Button>
    </form>
  )
}

export default CommentInput
