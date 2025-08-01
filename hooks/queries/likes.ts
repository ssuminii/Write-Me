import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { User } from '@supabase/supabase-js';
import { getLikeStatus, likeReadme, unlikeReadme, getBatchLikeStatus } from '@/lib/supabase/likes';
import type { LikeStatus } from '@/types';

// 좋아요 상태 가져오기
export function useLikeStatus(readmeId: string, user: User | null) {
  return useQuery ({

    queryKey: ['likeStatus', readmeId, user?.id],
    queryFn: () => getLikeStatus(readmeId, user),
    enabled: !!readmeId,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
}

// 좋아요 추가
export function useLikeMutation(readmeId: string, user: User | null, readmeIds: string[]) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => likeReadme(readmeId, user),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['batchLikeStatus', readmeIds, user?.id] })
      const previous = queryClient.getQueryData<LikeStatus[]>(['batchLikeStatus', readmeIds, user?.id])
      queryClient.setQueryData<LikeStatus[]>(['batchLikeStatus', readmeIds, user?.id], (old) => {
        if (!old) return []
        return old.map((item) =>
          item.readmeId === readmeId
            ? { ...item, liked: true, count: item.count + 1 } 
            : item
        )
      })
      return { previous }
    },
    onError: (_, __, context) => {
      if (context?.previous) {
        queryClient.setQueryData(['batchLikeStatus', readmeIds, user?.id], context.previous)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['batchLikeStatus', readmeIds, user?.id] })
    },
  })
}


// 좋아요 취소
export function useUnlikeMutation(readmeId: string, user: User | null, readmeIds: string[]) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => unlikeReadme(readmeId, user),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['batchLikeStatus', readmeIds, user?.id] })

      const previous = queryClient.getQueryData<LikeStatus[]>(['batchLikeStatus', readmeIds, user?.id])

      queryClient.setQueryData<LikeStatus[]>(['batchLikeStatus', readmeIds, user?.id], (old) => {
        if (!old) return []
        return old.map((item) =>
          item.readmeId === readmeId
            ? { ...item, liked: false, count: item.count - 1 }
            : item
        )
      })

      return { previous }
    },
    onError: (_, __, context) => {
      if (context?.previous) {
        queryClient.setQueryData(['batchLikeStatus', readmeIds, user?.id], context.previous)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['batchLikeStatus', readmeIds, user?.id] })
    },
  })
}


// 좋아요 일괄 조회
export function useBatchLikeStatus(readmeIds: string[], user: User | null) {
  return useQuery({
    queryKey: ['batchLikeStatus', readmeIds, user?.id],
    queryFn: () => getBatchLikeStatus(readmeIds, user),
    enabled: readmeIds.length > 0,
  })
}