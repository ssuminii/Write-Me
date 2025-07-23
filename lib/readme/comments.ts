import { supabase } from '../supabase/supabase-client'

// 댓글 작성
export async function createComment({
  readmeId,
  content,
}: {
  readmeId: string
  content: string
}) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) throw new Error('로그인이 필요한 기능입니다.')

  const { error } = await supabase.from('comments').insert([
    {
      readme_id: readmeId,
      content,
      user_id: user.id,
      user_email: user.email
    },
  ])

  if (error) {
    throw new Error(`댓글 작성에 실패했습니다: ${error.message}`)
  }
}

// 댓글 조회
export async function getCommentsByReadmeId(readmeId: string) {
  const { data, error } = await supabase
    .from('comments')
    .select('id, content, user_email, created_at')
    .eq('readme_id', readmeId)
    .order('created_at', { ascending: true })

  if (error) {
    throw new Error(`댓글 조회 실패: ${error.message}`)
  }

  return data
}
