import MainCard from '@/components/main-card'

export default function Home() {
  return (
    <div className='bg-primary h-[calc(100vh-88px)] flex justify-center items-center gap-40'>
      <MainCard title='Profile' href='/profile' img='' />
      <MainCard title='Project' href='/project' img='' />
    </div>
  )
}
