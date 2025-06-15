'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useMounted } from '@/hooks'

export default function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const mounted = useMounted()

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className='p-2 rounded-full border-1 cursor-pointer'
    >
      {currentTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      <span className='sr-only'>Toggle theme</span>
    </button>
  )
}
