import { LoginForm, LoginIntro, ErrorToast } from '../_components'
import { Suspense } from 'react'

export default function Page() {
  return (
    <div className='flex w-full h-[calc(100vh-4.5rem)]'>
      <LoginIntro />
      <LoginForm />
      <Suspense fallback={null}>
        <ErrorToast />
      </Suspense>
    </div>
  )
}
