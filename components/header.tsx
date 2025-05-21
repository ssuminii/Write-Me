import MainNav from '@/components/main-nav'
import ModeToggle from '@/components/mode-toggle'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex justify-between items-center h-22 px-12 font-semibold hover:accent'>
      <MainNav />
      <nav className='flex items-center gap-4'>
        <Link href='/login'>Login</Link>
        <ModeToggle />
      </nav>
    </header>
  )
}
