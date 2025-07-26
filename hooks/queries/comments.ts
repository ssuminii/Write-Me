import { createComment, getCommentsByReadmeId } from '@/lib/readme';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useCommentsQuery(readmeId: string) {
  return useQuery({
    queryKey: ['comment', readmeId],
    queryFn: () => getCommentsByReadmeId(readmeId),
    enabled: !!readmeId,
    staleTime: 1000 * 60 * 5
  })
}

export function useCreateCommentMutaition(readmeId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (content: string) => createComment({ readmeId, content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comment'] })
    },
  })
}