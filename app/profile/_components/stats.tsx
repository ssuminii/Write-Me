import { LabelInput, LabelSelect } from '@/components/ui'
import type { StatsProps } from '../_modles'

const Stats = ({ stats, onStatsChange }: StatsProps) => {
  return (
    <section className='flex flex-col gap-6'>
      <LabelInput
        id='github-stats-id'
        label='GitHub 아이디'
        placeholder='GitHub 아이디를 입력해주세요'
        value={stats.id}
        onChange={(value) => onStatsChange({ ...stats, id: value })}
        pos='row'
        labelWidth={24}
      />
      <LabelSelect
        id='github-stats-theme'
        label='Theme'
        placeholder='테마를 선택해주세요'
        value={stats.theme}
        onChange={(value) => {
          onStatsChange({ ...stats, theme: value })
        }}
        options={[
          'none',
          'dark',
          'radical',
          'merko',
          'gruvbox',
          'tokyonight',
          'onedark',
          'cobalt',
          'synthwave',
          'highcontrast',
          'dracula',
        ]}
        pos='row'
        labelWidth={24}
      />
    </section>
  )
}

export default Stats
