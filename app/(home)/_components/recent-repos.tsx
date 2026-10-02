import { Tag } from '@/components/ui'

interface RecentReposProps {
  repos: string[]
  onSelect: (repo: string) => void
}

export default function RecentRepos({ repos, onSelect }: RecentReposProps) {
  if (!repos.length) return null

  return (
    <div className='flex flex-wrap justify-center gap-2'>
      {repos.map((repo) => (
        <Tag
          key={repo}
          label={repo}
          prefix={<span className='text-iris-2'>✦</span>}
          onClick={() => onSelect(repo)}
          className='border-foreground/15 bg-background/70'
        />
      ))}
    </div>
  )
}
