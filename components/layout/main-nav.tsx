import { mainNav } from '@/config/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function MainNav() {
  return (
    <div className='flex items-center gap-8'>
      <Link href='/'>
        <Image src='/images/logo.svg' alt='logo' width={128} height={60} />
      </Link>
      <nav className='flex gap-4'>
        {mainNav.map((item) => (
          <Link key={item.title} href={item.href} className='hover:text-primary-hover'>
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
