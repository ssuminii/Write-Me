import { Comments } from './_components'
import { DetailContent } from './_components'
import { Suspense } from 'react'

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  return (
    <main className='flex p-10 gap-20'>
      <Suspense fallback={<div>Loading...</div>}>
        <DetailContent id={id} />
      </Suspense>
      <aside className='flex-1'>
        <Suspense fallback={<div>Loading...</div>}>
          <Comments readmeId={id} />
        </Suspense>
      </aside>
    </main>
  )
}

export default Page
