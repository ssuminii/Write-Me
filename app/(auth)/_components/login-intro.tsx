const LoginIntro = () => {
  return (
    <div className='flex flex-col justify-center items-center flex-1 bg-gradient-to-br from-[#9B8FBA] to-[#6C6D9D] gap-18'>
      <h1 className='font-bold text-7xl text-white'>Write Me</h1>
      <span className='text-accent'>
        Write Me는 개발자를 위한 <strong>README 생성 도구</strong>입니다. <br />
        <br />
        자기소개나 프로젝트 소개가 필요하신가요? <br />
        마크다운에 익숙하지 않아도 괜찮아요! <br />
        템플릿을 선택하고 내용을 입력하기만 하면 <br />
        깔끔하고 완성도 높은 README가 금방 만들어집니다. <br />
        <br />
        드래그 앤 드롭 편집, 실시간 프리뷰, 커스텀 위젯까지 지원하니 <br />
        당신만의 스타일로 자유롭게 꾸며보세요. <br />
      </span>
    </div>
  )
}

export default LoginIntro
