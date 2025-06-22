interface InfoProps {
  user: string
  className?: string
}

const Info = ({ user, className }: InfoProps) => {
  return (
    <div className={`py-3 px-4 bg-sky-200 pr-40 ${className}`}>
      <span className='font-bold'>{user}</span>님의 README를 Fork하여 새로운 README를 작성중입니다.
      자유롭게 수정하여 나만의 README를 만들어보세요! ✨
    </div>
  )
}

export default Info
