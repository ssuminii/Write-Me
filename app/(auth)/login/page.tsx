'use client'

import { LoginForm, LoginIntro } from '../_components'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

export default function Login() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  useEffect(() => {
    if (error === 'unauthorized') {
      toast.error('로그인이 필요한 페이지입니다.')
    }
  }, [error])

  return (
    <div className='flex w-full h-[calc(100vh-88px)]'>
      <LoginIntro />
      <LoginForm />
    </div>
  )
}
