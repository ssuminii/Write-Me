import { ProjectsProps } from '../_modles'
import InputCard from '@/components/input-card'
import { LabelInput } from '@/components/ui'
import { useDynamicList } from '@/hooks/useDynamicList'

const Project = ({ projects, onProjectsChange }: ProjectsProps) => {
  const { handleAdd, handleRemove, handleChange } = useDynamicList(projects, onProjectsChange, {
    title: '',
    desc: '',
    link: '',
  })

  return (
    <div>
      {projects.map((project, idx) => (
        <InputCard
          key={project.id}
          isRemovable={idx !== 0}
          onAdd={handleAdd}
          onRemove={() => handleRemove(project.id)}
        >
          <LabelInput
            id={`project-title-${project.id}`}
            label='프로젝트명'
            placeholder='Write Me'
            value={project.title}
            onChange={(value) => handleChange(project.id, 'title', value)}
          />
          <LabelInput
            id={`project-desc-${project.id}`}
            label='프로젝트 한 줄 소개'
            placeholder='Write Me는 개발자를 위한 README 생성 도구입니다.'
            value={project.desc}
            onChange={(value) => handleChange(project.id, 'desc', value)}
          />
          <LabelInput
            id={`project-link-${project.id}`}
            label='프로젝트 링크'
            placeholder='www.writeme.com'
            value={project.link}
            onChange={(value) => handleChange(project.id, 'link', value)}
          />
        </InputCard>
      ))}
    </div>
  )
}

export default Project
