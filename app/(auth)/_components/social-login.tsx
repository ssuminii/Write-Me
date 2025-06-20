'use client'

import Image from 'next/image'
import { Button } from '@/components/ui'
import { handleOAuthLogin } from '@/api'

const SocialLogin = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Button
        onClick={() => handleOAuthLogin('google')}
        className='relative h-12 bg-gray-300 hover:bg-gray-400'
      >
        <Image
          src='/icons/google.png'
          alt='Google 아이콘'
          width={18}
          height={18}
          className='absolute left-4'
        />
        Google로 로그인
      </Button>
      <Button
        onClick={() => handleOAuthLogin('github')}
        className='relative h-12 bg-black hover:bg-black'
      >
        <Image
          src='/icons/github.png'
          alt='GitHub 아이콘'
          width={22}
          height={22}
          className='absolute left-4'
        />
        GitHub으로 로그인
      </Button>
    </div>
  )
}

export default SocialLogin
