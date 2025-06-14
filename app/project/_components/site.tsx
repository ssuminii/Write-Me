import { LabelInput } from '@/components/ui'
import type { SiteProps } from '@/app/project/_models/site'

const Site = ({ name, link, onChange }: SiteProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <LabelInput
        label='프로젝트 이름'
        pos='row'
        placeholder='Write Me'
        value={name}
        onChange={(value) => onChange({ name: value, link })}
      />
      <LabelInput
        label='프로젝트 링크'
        pos='row'
        placeholder='www.writeme.com'
        value={link}
        onChange={(value) => onChange({ name, link: value })}
      />
    </div>
  )
}

export default Site
