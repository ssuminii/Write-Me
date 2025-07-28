import { Comments } from './_components'
import { DetailContent } from './_components'

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  return (
    <main className='flex p-10 gap-20'>
      <DetailContent id={id} />
      <aside className='flex-1'>
        <Comments readmeId={id} />
      </aside>
    </main>
  )
}

export default Page
