import MainNav from '@/components/main-nav'
import ModeToggle from '@/components/mode-toggle'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex justify-between items-center py-6 font-semibold hover:accent'>
      <MainNav />
      <nav className='flex items-center gap-4'>
        <ModeToggle />
        <Link href='/login'>Login</Link>
      </nav>
    </header>
  )
}
