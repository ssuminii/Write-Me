import { AchievementProps } from '../_modles'
import InputCard from '@/components/input-card'
import { PeriodInput, LabelInput } from '@/components/ui'
import { useDynamicList } from '@/hooks/useDynamicList'

const Achievements = ({ achievements, onAchievementsChange }: AchievementProps) => {
  const { handleAdd, handleRemove, handleChange } = useDynamicList(
    achievements,
    onAchievementsChange,
    {
      title: '',
      start: '',
      end: '',
      desc: '',
    }
  )

  return (
    <div className='flex flex-col gap-4'>
      {achievements.map((achievement, idx) => (
        <InputCard
          key={achievement.id}
          isRemovable={idx !== 0}
          onAdd={handleAdd}
          onRemove={() => handleRemove(achievement.id)}
        >
          <LabelInput
            id={`achievement-title-${achievement.id}`}
            label='활동명'
            placeholder='외부 활동 및 수상 내역을 입력해주세요.'
            value={achievement.title}
            onChange={(value) => handleChange(achievement.id, 'title', value)}
          />
          <PeriodInput
            id={`achievement-period-${achievement.id}`}
            label='기간'
            startValue={achievement.start}
            endValue={achievement.end}
            start={(value) => handleChange(achievement.id, 'start', value)}
            end={(value) => handleChange(achievement.id, 'end', value)}
          />
          <LabelInput
            id={`achievement-desc-${achievement.id}`}
            label='설명'
            placeholder='활동에 대한 설명을 입력해주세요.'
            value={achievement.desc}
            onChange={(value) => handleChange(achievement.id, 'desc', value)}
          />
        </InputCard>
      ))}
    </div>
  )
}

export default Achievements
