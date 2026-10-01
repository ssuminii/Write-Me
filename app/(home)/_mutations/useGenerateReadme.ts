import { useMutation } from '@tanstack/react-query'
import type { GenerateReadmeRequest, GenerateReadmeResponse } from '@/types'

async function generateReadme(body: GenerateReadmeRequest): Promise<GenerateReadmeResponse> {
  const res = await fetch('/api/readme/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message ?? 'README를 만들지 못했어요. 다시 시도해주세요.')
  return data
}

export const useGenerateReadme = () => useMutation({ mutationFn: generateReadme })
