import Markdown from '@/components/markdown'

export default function Profile() {
  return (
    <div className='flex w-full min-h-screen'>
      <div className='flex-1'>write readme</div>
      <Markdown className='flex-2' />
    </div>
  )
}
