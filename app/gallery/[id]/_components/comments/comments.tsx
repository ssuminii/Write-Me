import CommentInput from './comment-Input'
import type { CommentData } from '@/types'

interface CommentsProps {
  readmeId: string
  comments: CommentData[]
  className?: string
}

const Comments = ({ readmeId, comments, className }: CommentsProps) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <h2 className='text-lg font-semibold'>댓글 {comments.length}개</h2>
      <CommentInput readmeId={readmeId} />
      <ul className='flex flex-col gap-4 mt-4'>
        {comments.map((comment) => (
          <li key={comment.id} className='border-b pb-4 last:border-b-0'>
            <div className='flex justify-between items-center'>
              <span className='text-sm font-medium text-primary'>
                @{comment.user_email?.split('@')[0]}
              </span>
              <span className='text-xs text-gray-500'>{comment.created_at.split('T')[0]}</span>
            </div>
            <p className='mt-1 text-gray-700 whitespace-pre-line'>{comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Comments
