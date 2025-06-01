import InputCard from '@/components/input-card'
import { LabelInput } from '@/components/ui'

const Project = () => {
  return (
    <InputCard>
      <LabelInput
        id='project-name'
        label='프로젝트명'
        placeholder='Write Me'
        value=''
        onChange={() => {}}
      />
      <LabelInput
        id='project-desc'
        label='프로젝트 한 줄 소개'
        placeholder='Write Me는 개발자를 위한 README 생성 도구입니다.'
        value=''
        onChange={() => {}}
      />
      <LabelInput
        id='project-url'
        label='프로젝트 링크'
        placeholder='www.writeme.com'
        value=''
        onChange={() => {}}
      />
    </InputCard>
  )
}

export default Project
