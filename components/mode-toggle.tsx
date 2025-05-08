'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='p-2 rounded-full border-2 cursor-pointer'
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} strokeWidth={3} />}
    </button>
  )
}
