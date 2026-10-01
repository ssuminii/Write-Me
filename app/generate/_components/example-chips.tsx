import { Tag } from '@/components/ui'
import { CHIP_EXAMPLES } from '../_constants/examples'

interface ExampleChipsProps {
  onSelect: (repo: string) => void
}

export default function ExampleChips({ onSelect }: ExampleChipsProps) {
  return (
    <div className='flex flex-wrap justify-center gap-2'>
      {CHIP_EXAMPLES.map(({ repo }) => (
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
