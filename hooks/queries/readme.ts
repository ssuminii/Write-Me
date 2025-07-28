import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createReadme, getReadmeById, getReadmes } from '@/lib/readme'
import type { CreateReadme, CreateReadmeInput } from '@/types'

export function useReadmesQuery(keyword: string, initialReadmes: CreateReadme[]) {
  return useQuery({
    queryKey: ['readmeList', keyword],
    queryFn: () => getReadmes(keyword),
    staleTime: 1000 * 60 * 5,
    placeholderData: initialReadmes,
  })
}

export function useReadmeByIdQuery(id: string) {
  return useQuery({
    queryKey: ['readmeDetail', id],
    queryFn: () => getReadmeById(id),
    staleTime: 1000 * 60 * 5,
  })
}

export function useCreateReadmeMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (input: CreateReadmeInput) => createReadme(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['readmeList'] })
    },
  })
}