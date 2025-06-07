import { CapsuleRenderProps } from '../_modles'
import { LabelInput, LabelSelect } from '@/components/ui'

const CapsuleRender = ({ capsuleRender, onCapsuleRenderChange }: CapsuleRenderProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <LabelSelect
        id='render-type'
        label='Type'
        placeholder='타입을 선택해주세요.'
        value={capsuleRender.type}
        onChange={(value) => onCapsuleRenderChange({ ...capsuleRender, type: value })}
        options={[
          'wave',
          'egg',
          'shark',
          'slice',
          'rect',
          'soft',
          'rounded',
          'cylinder',
          'waving',
          'venom',
          'speech',
          'blur',
          'transparent',
        ]}
        pos='row'
        labelWidth={32}
      />
      <LabelInput
        id='render-height'
        label='Height'
        placeholder='높이를 적어주세요.'
        helpText='숫자만 입력해주세요.'
        value={capsuleRender.height}
        onChange={(value) => onCapsuleRenderChange({ ...capsuleRender, height: value })}
        pos='row'
        labelWidth={32}
      />
      <LabelSelect
        id='render-color'
        label='Background'
        placeholder='배경 색상을 선택해주세요.'
        helpText='Hex Color 값으로 입력해주세요.'
        value={capsuleRender.background}
        onChange={(value) => onCapsuleRenderChange({ ...capsuleRender, background: value })}
        options={['auto', 'timeAuto', 'random', 'gradient', 'timeGradient']}
        pos='row'
        labelWidth={32}
      />
      <LabelInput
        id='render-text'
        label='Text'
        placeholder='나를 소개하는 문구나 단어를 적어주세요.'
        value={capsuleRender.text}
        onChange={(value) => onCapsuleRenderChange({ ...capsuleRender, text: value })}
        pos='row'
        labelWidth={32}
      />
      <LabelInput
        id='render-text-color'
        label='Font Color'
        placeholder='Text 색상을 입력해주세요.'
        helpText='Hex Color 값으로 입력해주세요.'
        value={capsuleRender.textColor}
        onChange={(value) => onCapsuleRenderChange({ ...capsuleRender, textColor: value })}
        pos='row'
        labelWidth={32}
      />
      <LabelSelect
        id='render-text-animation'
        label='Text-Animation'
        placeholder='Text Animation을 선택해주세요.'
        value={capsuleRender.textAnimation}
        onChange={(value) => onCapsuleRenderChange({ ...capsuleRender, textAnimation: value })}
        options={['none', 'fadeIn', 'scaleIn', 'blink', 'gruvbox', 'blinking', 'twinkling']}
        pos='row'
        labelWidth={32}
      />
      <LabelSelect
        id='render-theme'
        label='Theme'
        placeholder='테마를 선택해주세요.'
        value={capsuleRender.theme}
        onChange={(value) => onCapsuleRenderChange({ ...capsuleRender, theme: value })}
        options={[
          'none',
          'dark',
          'radical',
          'merko',
          'gruvbox',
          'gruvbox_light',
          'tokyonight',
          'onedark',
          'cobalt',
        ]}
        pos='row'
        labelWidth={32}
        helpText='Theme를 선택할 경우 입력된 배경 색상과 폰트 색상이 무시됩니다.'
      />
    </div>
  )
}

export default CapsuleRender
