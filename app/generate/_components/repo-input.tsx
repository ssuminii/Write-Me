'use client'

import { CornerDownLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ReadmeVersion } from '@/types'
import { VERSION_LABEL } from '../_constants/examples'

interface RepoInputProps {
  repoUrl: string
  version: ReadmeVersion
  isPending: boolean
  onRepoUrlChange: (repoUrl: string) => void
  onVersionChange: (version: ReadmeVersion) => void
  onSubmit: () => void
}

const VERSIONS: ReadmeVersion[] = ['simple', 'detailed']

export default function RepoInput({
  repoUrl,
  version,
  isPending,
  onRepoUrlChange,
  onVersionChange,
  onSubmit,
}: RepoInputProps) {
  return (
    <form
      className='mt-5 flex w-full max-w-[640px] gap-2'
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
    >
      <div
        className={cn(
          'flex min-w-0 flex-1 items-center rounded-xl border bg-background p-1 transition focus-within:border-iris-2 focus-within:ring-4 focus-within:ring-iris-2/40',
          isPending &&
            'animate-iris-flow border-transparent bg-[linear-gradient(100deg,var(--iris-1),var(--iris-3),var(--iris-4),var(--iris-1))] bg-[length:200%_100%]',
        )}
      >
        <input
          aria-label='GitHub 저장소 주소'
          placeholder='GitHub 저장소 주소를 넣어주세요'
          value={repoUrl}
          disabled={isPending}
          onChange={(e) => onRepoUrlChange(e.target.value)}
          className='min-w-0 flex-1 bg-transparent px-4 py-3 outline-none'
        />
        <div role='group' aria-label='README 버전' className='flex gap-0.5 rounded-lg bg-secondary p-0.5'>
          {VERSIONS.map((v) => (
            <button
              key={v}
              type='button'
              aria-pressed={version === v}
              onClick={() => onVersionChange(v)}
              className={cn(
                'rounded-md px-3 py-1.5 text-sm font-semibold text-foreground/50',
                version === v && 'bg-background text-foreground shadow-sm',
              )}
            >
              {VERSION_LABEL[v]}
            </button>
          ))}
        </div>
      </div>
      <button
        type='submit'
        disabled={isPending}
        aria-label='README 만들기'
        className='w-14 shrink-0 rounded-xl border border-foreground bg-foreground text-background disabled:opacity-60'
      >
        <CornerDownLeft className='mx-auto size-5' />
      </button>
    </form>
  )
}
