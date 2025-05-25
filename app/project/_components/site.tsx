import { Input } from '@/components/ui/input'
import type { SiteProps } from '@/app/project/_models/site'

const Site = ({ name, link, onChange }: SiteProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center gap-4'>
        <label htmlFor='project-name' className='w-24'>
          프로젝트 이름
        </label>
        <Input
          id='project-name'
          value={name}
          onChange={(e) => onChange({ name: e.target.value, link })}
          placeholder='Write Me'
          className='flex-1'
        />
      </div>

      <div className='flex items-center gap-4'>
        <label htmlFor='project-link' className='w-24'>
          프로젝트 링크
        </label>
        <Input
          id='project-link'
          value={link}
          onChange={(e) => onChange({ name, link: e.target.value })}
          placeholder='wwww.writeme.com'
          className='flex-1'
        />
      </div>
    </div>
  )
}

export default Site
