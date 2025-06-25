'use client'

import { useEffect } from 'react'
import { supabase } from '@/lib/supabase-client'
import { useAuthStore } from '@/stores/useAuthStore'

export default function AppInitializer() {
  const setUser = useAuthStore((state) => state.setUser)

  useEffect(() => {
    supabase.auth.getUser().then(({ data, error }) => {
      if (!error) setUser(data.user)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [setUser])

  return null
}
