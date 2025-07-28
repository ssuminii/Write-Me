import { LoginForm, LoginIntro } from '../_components'

export default function Login() {
  return (
    <div className='flex w-full h-[calc(100vh-88px)]'>
      <LoginIntro />
      <LoginForm />
    </div>
  )
}
