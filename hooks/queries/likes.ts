import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { User } from '@supabase/supabase-js';
import { getLikeStatus, likeReadme, unlikeReadme } from '@/lib/supabase/likes';

// 좋아요 상태 가져오기
export function useLikeStatus(readmeId: string, user: User | null) {
  return useQuery ({
    queryKey: ['likeStatus', readmeId, user?.id],
    queryFn: () => getLikeStatus(readmeId, user),
    enabled: !!readmeId && !!user,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
}

// 좋아요 추가
export function useLikeMutation(readmeId: string, user: User | null) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => likeReadme(readmeId, user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['likeStatus', readmeId, user?.id] })
    }
  })
}

// 좋아요 취소
export function useUnlikeMutation(readmeId: string, user: User | null) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => unlikeReadme(readmeId, user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['likeStatus', readmeId, user?.id] })
    },
  })
}