import { mainNav } from '@/config/navigation'
import Link from 'next/link'

export default function MainNav() {
  return (
    <nav className='flex gap-7'>
      {mainNav.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className='text-[15px] font-semibold text-foreground/75 hover:text-foreground'
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
