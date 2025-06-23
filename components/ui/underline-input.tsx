export const UnderlineInput = ({ ...props }: React.ComponentProps<'input'>) => {
  return (
    <input
      {...props}
      className={`w-3/5 border-0 border-b border-zinc-300 focus:border-black focus:outline-none text-[24px] font-medium bg-transparent placeholder:text-zinc-400 py-2 transition-colors duration-300 ${
        props.className ?? ''
      }`}
    />
  )
}
