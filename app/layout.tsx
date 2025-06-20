import './globals.css'
import localFont from 'next/font/local'
import Header from '@/components/layout/header'
import { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: 'Write Me',
  description:
    'Write Me는 개발자를 위한 README 생성 도구입니다. 자기소개 또는 프로젝트 소개 템플릿을 선택하고, 커스텀 위젯을 통해 쉽고 빠르게 나만의 README를 만들 수 있습니다.',
  icons: {
    icon: '/logo/logo-light.png',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className={`${pretendard.variable}`}>
      <body className={`${pretendard.className} w-full h-screen flex flex-col`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='flex-1 overflow-auto'>{children}</main>
          <Toaster richColors position='top-center' />
        </ThemeProvider>
      </body>
    </html>
  )
}
