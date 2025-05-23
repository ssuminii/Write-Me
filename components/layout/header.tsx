import MainNav from '@/components/layout/main-nav'
import ModeToggle from '@/components/mode-toggle'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex justify-between items-center h-22 px-12 font-semibold border-b border-gray-300'>
      <MainNav />
      <nav className='flex items-center gap-4'>
        <Link href='/login' className=' hover:text-primary-hover'>
          Login
        </Link>
        <ModeToggle />
      </nav>
    </header>
  )
}
