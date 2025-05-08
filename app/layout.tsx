import './globals.css'
import localFont from 'next/font/local'
import Header from '@/components/header'

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className={`${pretendard.variable}`}>
      <body className={`${pretendard.className} px-12`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
