'use client'

import MainNav from '@/components/layout/main-nav'
import ModeToggle from '@/components/mode-toggle'
import { supabase } from '@/lib/supabase/supabase-client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      setIsLogin(!!data.session)
    }
    getSession()

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLogin(!!session)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <header className='absolute inset-x-0 top-0 z-10 flex h-18 items-center justify-between px-14 font-semibold'>
      <div className='flex items-center gap-10'>
        <Link href='/' className='text-xl font-extrabold tracking-tight'>
          Write-Me
        </Link>
        <MainNav />
      </div>
      <nav className='flex items-center gap-4 text-[15px]'>
        {isLogin ? (
          <div onClick={handleLogout} className=' hover:text-primary-hover cursor-pointer'>
            Logout
          </div>
        ) : (
          <Link href='/login' className=' hover:text-primary-hover'>
            Login
          </Link>
        )}

        <ModeToggle />
      </nav>
    </header>
  )
}
