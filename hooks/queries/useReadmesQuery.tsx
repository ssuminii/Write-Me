import { useQuery } from '@tanstack/react-query'
import { getReadmes } from '@/lib/readme'

export function useReadmesQuery(keyword: string) {
  return useQuery({
    queryKey: ['readmes', keyword],
    queryFn: () => getReadmes(keyword),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  })
}
