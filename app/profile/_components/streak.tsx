import { LabelInput, LabelSelect } from '@/components/ui'
import type { StreakProps } from '../_modles'
import { GITHUB_STREAK_THEMES } from '../_constants'

const Streak = ({ streak, onStreakChange }: StreakProps) => {
  return (
    <section className='flex flex-col gap-6'>
      <LabelInput
        id='github-streak-id'
        label='GitHub 아이디'
        placeholder='GitHub 아이디를 입력해주세요'
        value={streak.id}
        onChange={(value) => onStreakChange({ ...streak, id: value })}
        pos='row'
        labelWidth={24}
      />
      <LabelSelect
        id='github-streak-theme'
        label='Theme'
        placeholder='테마를 선택해주세요'
        value={streak.theme}
        onChange={(value) => onStreakChange({ ...streak, theme: value })}
        options={GITHUB_STREAK_THEMES}
        pos='row'
        labelWidth={24}
      />
    </section>
  )
}

export default Streak
