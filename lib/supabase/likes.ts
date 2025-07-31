import { supabase } from './supabase-client'
import type { User } from '@supabase/supabase-js'
import type { LikeStatus } from '@/types'

// 좋아요 추가
export async function likeReadme(readmeId: string, user: User | null) {
  if (!user) throw new Error('로그인이 필요한 기능입니다.')

  const { error } = await supabase.from('likes').insert({
    user_id: user.id,
    readme_id: readmeId,
  })

  if (error) throw error
}

// 좋아요 취소
export async function unlikeReadme(readmeId: string, user: User | null) {
  if (!user) throw new Error('로그인이 필요합니다.')

  const { error } = await supabase
    .from('likes')
    .delete()
    .eq('readme_id', readmeId)
    .eq('user_id', user.id)

  if (error) throw error
}

// 좋아요 상태 가져오기
export async function getLikeStatus(readmeId: string, user: User | null) {
  const { count } = await supabase
    .from('likes')
    .select('*', { count: 'exact', head: true })
    .eq('readme_id', readmeId)

  const { data: myLike } = await supabase
    .from('likes')
    .select('*')
    .eq('readme_id', readmeId)
    .eq('user_id', user?.id || '')
    .maybeSingle()

  return {
    liked: !!myLike,
    count: count ?? 0,
  }
}

// 좋아요 일괄 조회
export async function getBatchLikeStatus(readmeIds: string[], user: User | null): Promise<LikeStatus[]> {
  if (readmeIds.length === 0) return []

  const { data, error } = await supabase
    .from('likes')
    .select('readme_id, user_id')
    .in('readme_id', readmeIds)

  if (error) throw error

  return readmeIds.map((id) => {
    const filtered = data.filter((item) => item.readme_id === id)
    const count = filtered.length
    const liked = filtered.some((item) => item.user_id === user?.id)

    return {
      readmeId: id,
      count,
      liked,
    }
  })
}