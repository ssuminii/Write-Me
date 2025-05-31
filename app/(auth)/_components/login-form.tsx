import { SocialLogin } from '../_components'
import TextDivider from '@/components/text-divider'
import { Button, Input } from '@/components/ui'
import Link from 'next/link'

const LoginForm = () => {
  return (
    <div className='flex justify-center items-center flex-1'>
      <div className='flex flex-col gap-8 w-[400px]'>
        <h1 className='font-bold text-4xl'>Login</h1>
        <form className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email'>Email</label>
            <Input id='email' type='email' placeholder='Email' className='h-10' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='password'>Password</label>
            <Input id='password' type='password' placeholder='Password' className='h-10' />
          </div>
          <Button className='h-12'>로그인</Button>
          <p className='text-sm'>
            계정이 없으신가요?
            <Link href='/signin' className='text-blue-500 hover:underline ml-2'>
              회원가입 하러가기
            </Link>
          </p>
        </form>
        <TextDivider text='또는' />
        <SocialLogin />
      </div>
    </div>
  )
}

export default LoginForm
