const TextDivider = ({ text }: { text: string }) => {
  return (
    <div className='flex items-center w-full gap-4'>
      <div className='flex-grow border-t border-gray-300' />
      <span className='text-sm text-gray-500'>{text}</span>
      <div className='flex-grow border-t border-gray-300' />
    </div>
  )
}

export default TextDivider
