  import { supabase } from '@/lib/supabaseClient'
  
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