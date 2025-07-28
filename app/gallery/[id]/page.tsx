import { Comments } from './_components'
import { DetailContent } from './_components'
import { Suspense } from 'react'

type Params = { id: string }

const Page = async ({ params }: { params: Params }) => {
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
