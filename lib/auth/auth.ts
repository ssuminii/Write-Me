import { supabase } from '@/lib/supabase/supabase-client'

export const handleOAuthLogin = async (provider: 'google' | 'github') => {
  try {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/`,
      },
    })
  } catch (error) {
    console.error(`${provider} 로그인 실패:`, error)
  }
}

export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser()
  if (error) {
    console.error('유저 정보를 가져오는 데 실패했습니다:', error)
    return null
  }
  return data.user
}