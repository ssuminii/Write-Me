'use client'

import { mainNav } from '@/config/navigation'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useMounted } from '@/hooks'

export default function MainNav() {
  const { theme, systemTheme } = useTheme()
  const mounted = useMounted()

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className='flex items-center gap-8'>
      <Link href='/'>
        <Image src={`/logo/logo-${currentTheme}.svg`} alt='write-me-logo' width={128} height={60} />
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
