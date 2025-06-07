import { TechStacksProps } from '../../_modles'
import StackInfo from './stack-info'
import InputCard from '@/components/input-card'
import { LabelInput, LabelSelect } from '@/components/ui'
import { useDynamicList } from '@/hooks/useDynamicList'

const TechStack = ({ techStacks, onTechStacksChange }: TechStacksProps) => {
  const { handleAdd, handleRemove, handleChange } = useDynamicList(techStacks, onTechStacksChange, {
    style: '',
    name: '',
    bgColor: '',
    logoColor: '',
  })

  return (
    <div className='flex flex-col gap-4'>
      <StackInfo />
      {techStacks.map((techStack, idx) => (
        <InputCard
          key={techStack.id}
          isRemovable={idx !== 0}
          onAdd={handleAdd}
          onRemove={() => handleRemove(techStack.id)}
        >
          <LabelSelect
            id={`badge-style-${techStack.id}`}
            label='Style'
            placeholder='스타일을 선택해주세요.'
            options={['---', 'flat', 'flat-square', 'plastic', 'for-the-badge', 'social']}
            value={techStack.style}
            onChange={(value) => handleChange(techStack.id, 'style', value)}
            pos='row'
            labelWidth={20}
          />
          <LabelInput
            id='stack-name'
            label='기술 스택명'
            placeholder='ex) Next.js'
            value={techStack.name}
            onChange={(value) => handleChange(techStack.id, 'name', value)}
            pos='row'
            labelWidth={20}
          />
          <LabelInput
            id='bg-color'
            label='배경 색상'
            placeholder='hax code로 입력해주세요. ex) #E34F26'
            value={techStack.bgColor}
            onChange={(value) => handleChange(techStack.id, 'bgColor', value)}
            pos='row'
            labelWidth={20}
          />
          <LabelSelect
            id='logo-color'
            label='로고 색상'
            placeholder='색상을 선택해주세요.'
            options={['black', 'white']}
            value={techStack.logoColor}
            onChange={(value) => handleChange(techStack.id, 'logoColor', value)}
            pos='row'
            labelWidth={20}
          />
        </InputCard>
      ))}
    </div>
  )
}

export default TechStack
