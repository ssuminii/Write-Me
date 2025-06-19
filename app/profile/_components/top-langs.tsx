import type { TopLangsProps } from '../_modles'
import { LabelInput, LabelSelect } from '@/components/ui'

const TopLangs = ({ topLangs, onTopLangsChange }: TopLangsProps) => {
  return (
    <section aria-label='most-used-languages' className='flex flex-col gap-6'>
      <LabelInput
        id='github-id'
        label='GitHub 아이디'
        placeholder='GitHub 아이디를 입력해주세요'
        value={topLangs.id}
        onChange={(value) => onTopLangsChange({ ...topLangs, id: value })}
        pos='row'
        labelWidth={24}
      />
      <LabelSelect
        id='top-langs-layout'
        label='Layout'
        placeholder='레이아웃을 선택해주세요.'
        value={topLangs.layout}
        onChange={(value) => onTopLangsChange({ ...topLangs, layout: value })}
        options={['none', 'compact', 'donut', 'donut-vertical', 'pie']}
        pos='row'
        labelWidth={24}
      />
    </section>
  )
}

export default TopLangs
