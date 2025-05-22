'use client'

import Link from 'next/link'
import { Card, CardTitle } from '@/components/ui/card'

interface MainCardProps {
  title: string
  img: string
  href: string
}

const MainCard = ({ title, img, href }: MainCardProps) => {
  return (
    <Link href={href} className='group'>
      <Card
        className='w-[400px] h-[300px] justify-center items-center bg-cover transition-transform hover:scale-[1.02]'
        style={{ backgroundImage: `url(${img})` }}
      >
        <CardTitle className='text-3xl font-bold group-hover:font-extrabold transition'>
          {title} <br /> Readme
        </CardTitle>
      </Card>
    </Link>
  )
}

export default MainCard
