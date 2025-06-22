import Markdown from '@/components/markdown'
import { Info } from './_components'
import FileActions from '@/components/file-actions'

const Page = () => {
  const data = {
    user: 'ssuminii',
    markdown: '# title',
  }

  return (
    <div className='flex flex-col gap-6 py-6 h-full'>
      <div className='flex items-center justify-between mx-10'>
        <Info user={data.user} />
        <FileActions markdown={''} />
      </div>
      <Markdown value={data.markdown} className='flex-1' />
    </div>
  )
}

export default Page
