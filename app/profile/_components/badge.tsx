import type { BadgeProps } from '../_modles'
import InputCard from '@/components/input-card'
import { LabelSelect, LabelInput } from '@/components/ui'
import { useDynamicList } from '@/hooks'

const Badge = ({ badges, onBadgesChange }: BadgeProps) => {
  const { handleAdd, handleRemove, handleChange } = useDynamicList(badges, onBadgesChange, {
    style: '',
    logo: '',
    link: '',
    bgColor: '',
    logoColor: '',
  })

  return (
    <div className='flex flex-col gap-4'>
      {badges.map((badge, idx) => (
        <InputCard
          key={badge.id}
          isRemovable={idx !== 0}
          onAdd={handleAdd}
          onRemove={() => handleRemove(badge.id)}
        >
          <LabelSelect
            id={`badge-style-${badge.id}`}
            label='Style'
            placeholder='스타일을 선택해주세요.'
            options={['---', 'flat', 'flat-square', 'plastic', 'for-the-badge', 'social']}
            value={badge.style}
            onChange={(value) => handleChange(badge.id, 'style', value)}
            pos='row'
            labelWidth={24}
          />
          <LabelInput
            id='badge-name'
            label='Badge Name'
            placeholder='ex) Blog'
            value={badge.logo}
            onChange={(value) => handleChange(badge.id, 'logo', value)}
            pos='row'
            labelWidth={24}
          />
          <LabelInput
            id='badge-link'
            label='Link'
            placeholder='ex) www.writeme.com'
            value={badge.link}
            onChange={(value) => handleChange(badge.id, 'link', value)}
            pos='row'
            labelWidth={24}
          />
          <LabelInput
            id='badge-bg-color'
            label='배경 색상'
            placeholder='hax code로 입력해주세요. ex) #E34F26'
            value={badge.bgColor}
            onChange={(value) => handleChange(badge.id, 'bgColor', value)}
            pos='row'
            labelWidth={24}
          />
          <LabelSelect
            id='badge-logo-color'
            label='로고 색상'
            placeholder='색상을 선택해주세요.'
            options={['black', 'white']}
            value={badge.logoColor}
            onChange={(value) => handleChange(badge.id, 'logoColor', value)}
            pos='row'
            labelWidth={24}
          />
        </InputCard>
      ))}
    </div>
  )
}

export default Badge
