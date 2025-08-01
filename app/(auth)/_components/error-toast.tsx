'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

export function ErrorToast() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  useEffect(() => {
    if (error === 'unauthorized') {
      toast.error('로그인이 필요한 기능입니다.')
    }
  }, [error])

  return null
}
