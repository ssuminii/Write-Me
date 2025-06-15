'use client'

import InputCard from '@/components/input-card'
import type { StacksProps } from '../_models'
import { useDynamicList } from '@/hooks/useDynamicList'
import { LabelInput, LabelSelect } from '@/components/ui'

const Stacks = ({ stacks, onStacksChange }: StacksProps) => {
  const { handleAdd, handleRemove, handleChange } = useDynamicList(stacks, onStacksChange, {
    stack: '',
    reason: '',
    style: '',
    bgColor: '',
    iconColor: '',
  })

  return (
    <div className='flex flex-col gap-4'>
      {stacks.map((stack, idx) => (
        <InputCard
          key={stack.id}
          onAdd={handleAdd}
          onRemove={() => handleRemove(stack.id)}
          isRemovable={idx !== 0}
        >
          <LabelInput
            label='기술 스택명'
            placeholder='ex) Next.js'
            value={stack.stack}
            onChange={(value) => handleChange(stack.id, 'stack', value)}
            pos='row'
            labelWidth={24}
          />
          <LabelInput
            label='도입 이유'
            placeholder='ex) SSR로 SEO와 초기 로딩 속도 개선'
            value={stack.reason}
            onChange={(value) => handleChange(stack.id, 'reason', value)}
            pos='row'
            labelWidth={24}
          />
          <LabelSelect
            id={`badge-style-${stack.id}`}
            label='Style'
            placeholder='스타일을 선택해주세요.'
            options={['---', 'flat', 'flat-square', 'plastic', 'for-the-badge', 'social']}
            value={stack.style}
            onChange={(value) => handleChange(stack.id, 'style', value)}
            pos='row'
            labelWidth={24}
          />
          <LabelInput
            label='배경 색상'
            placeholder='#2e2b26'
            value={stack.bgColor}
            onChange={(value) => handleChange(stack.id, 'bgColor', value)}
            pos='row'
            labelWidth={24}
          />
          <LabelSelect
            id='logo-color'
            label='아이콘 색상'
            placeholder='색상을 선택해주세요.'
            options={['black', 'white']}
            value={stack.iconColor}
            onChange={(value) => handleChange(stack.id, 'iconColor', value)}
            pos='row'
            labelWidth={24}
          />
        </InputCard>
      ))}
    </div>
  )
}

export default Stacks
