'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import Markdown from '@/components/markdown'
import type { ReadmeVersion } from '@/types'
import { copyMarkdown, downloadMarkdown } from '@/utils/markdown'
import { ExampleCards, ExampleChips, RepoInput } from './_components'
import { toRepoUrl } from './_constants/examples'
import { useGenerateReadme } from './_mutations/useGenerateReadme'

export default function HomePage() {
  const [repoUrl, setRepoUrl] = useState('')
  const [version, setVersion] = useState<ReadmeVersion>('simple')
  const [markdown, setMarkdown] = useState('')
  const { mutate, isPending } = useGenerateReadme()

  const handleSubmit = () => {
    if (!repoUrl.trim()) {
      toast.error('GitHub 저장소 주소를 넣어주세요.')
      return
    }
    mutate(
      { repoUrl, version },
      {
        onSuccess: (data) => setMarkdown(data.markdown),
        onError: (error) => toast.error(error.message),
      },
    )
  }

  const handleCopy = async () => {
    try {
      await copyMarkdown(markdown)
      toast.success('복사가 완료되었습니다! ✨')
    } catch {
      toast.error('앗, 복사에 실패했어요. 다시 시도해주세요 😢')
    }
  }

  return (
    <div className='relative -mt-18 min-h-[calc(100%+4.5rem)] overflow-hidden bg-secondary px-6 pb-16'>
      <div
        aria-hidden
        className='pointer-events-none absolute -right-32 top-20 size-[620px] rounded-full bg-[conic-gradient(from_90deg,var(--iris-1),var(--iris-2),var(--iris-3),var(--iris-4),var(--iris-5),var(--iris-1))] opacity-55 blur-[70px] dark:opacity-20'
      />
      <div
        aria-hidden
        className='pointer-events-none absolute -bottom-20 -left-40 size-[520px] rounded-full bg-[conic-gradient(from_200deg,var(--iris-4),var(--iris-5),var(--iris-1),var(--iris-4))] opacity-55 blur-[70px] dark:opacity-20'
      />

      <section className='relative mx-auto flex max-w-[860px] flex-col items-center gap-4 pt-44 text-center'>
        <h1 className='text-5xl font-extrabold tracking-tight sm:text-7xl'>
          README, 주소 하나로 완성.
        </h1>
        <p className='text-lg text-foreground/70'>
          GitHub 저장소 주소를 넣고, 프로젝트에 맞는 README를 만들어보세요.
        </p>
        <RepoInput
          repoUrl={repoUrl}
          version={version}
          isPending={isPending}
          onRepoUrlChange={setRepoUrl}
          onVersionChange={setVersion}
          onSubmit={handleSubmit}
        />
        <ExampleChips onSelect={(repo) => setRepoUrl(toRepoUrl(repo))} />
      </section>

      {markdown && (
        <section className='relative mx-auto mt-10 flex h-[600px] max-w-[1040px] flex-col overflow-hidden rounded-2xl border bg-background'>
          <div className='flex justify-end gap-2 border-b p-2'>
            <button
              type='button'
              onClick={handleCopy}
              className='rounded-lg border px-3 py-1 text-sm'
            >
              복사
            </button>
            <button
              type='button'
              onClick={() => downloadMarkdown(markdown)}
              className='rounded-lg border px-3 py-1 text-sm'
            >
              다운로드
            </button>
          </div>
          <Markdown className='min-h-0 flex-1' value={markdown} onChange={setMarkdown} />
        </section>
      )}

      <ExampleCards
        onSelect={(example) => {
          setRepoUrl(toRepoUrl(example.repo))
          setVersion(example.version)
        }}
      />
    </div>
  )
}
