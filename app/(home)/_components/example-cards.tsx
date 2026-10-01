import { OrbCard } from '@/components/ui'
import { EXAMPLES, VERSION_LABEL, type ReadmeExample } from '../_constants/examples'

interface ExampleCardsProps {
  onSelect: (example: ReadmeExample) => void
}

export default function ExampleCards({ onSelect }: ExampleCardsProps) {
  return (
    <section className='relative mx-auto mt-24 max-w-[1040px]'>
      <h2 className='mb-3.5 text-center text-lg font-bold'>이런 README가 나와요</h2>
      <ul className='grid grid-cols-2 gap-3 md:grid-cols-4'>
        {EXAMPLES.map((example) => (
          <li key={example.repo}>
            <OrbCard
              title={example.name}
              description={`${VERSION_LABEL[example.version]} · ${example.description}`}
              color={example.color}
              onClick={() => onSelect(example)}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
