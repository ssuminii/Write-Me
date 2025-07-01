import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import { ReadmeCreate } from './_components'

const Page = async () => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login?error=unauthorized')
  }

  return <ReadmeCreate />
}

export default Page
