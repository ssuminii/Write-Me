'use client'

import {
  Button,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  TagList,
} from '@/components/ui'
import { ImagePlus } from 'lucide-react'
import { useRef, useState } from 'react'
import { supabase } from '@/lib/supabase/supabase-client'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

interface SubmitContentProps {
  title: string
  tags: string[]
  source: string
}

const SubmitContent = ({ title, tags, source }: SubmitContentProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const route = useRouter()

  const handleImageUpload = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    setFile(selectedFile)
    console.log(file)
    const url = URL.createObjectURL(selectedFile)
    setPreviewUrl(url)
  }

  const handleRemoveFile = () => {
    setFile(null)
    setPreviewUrl(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = async () => {
    if (!file) {
      toast.error('썸네일 이미지를 업로드해주세요.')
      return
    }

    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session?.access_token) {
      toast.error('로그인이 필요합니다.')
      return
    }

    const formData = new FormData()
    formData.append('file', file)
    formData.append('title', title)
    formData.append('tags', JSON.stringify(tags))
    formData.append('source', source)

    const res = await fetch('/api/create-readme', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    })

    const result = await res.json()

    if (result.success) {
      toast.success('README가 성공적으로 업로드 되었습니다!')
      route.push('/gallery')
    } else {
      toast.error(`등록 실패: ${result.error}`)
    }
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>README Preview</DialogTitle>
      </DialogHeader>
      <div className='flex flex-col'>
        <div className='self-end'>
          <Button variant='link' onClick={handleImageUpload}>
            재업로드
          </Button>
          <Button variant='link' onClick={handleRemoveFile}>
            제거
          </Button>
        </div>
        <div className='relative flex flex-col gap-4 justify-center items-center w-full h-[200px] border rounded-md bg-gray-200 mb-2'>
          {previewUrl ? (
            <img
              src={previewUrl}
              alt='썸네일 미리보기'
              className='w-full h-full object-cover rounded-md'
            />
          ) : (
            <>
              <ImagePlus size={60} color='gray' />
              <Button variant='secondary' className='font-semibold' onClick={handleImageUpload}>
                Upload Thumbnail
              </Button>
            </>
          )}
          <input
            ref={fileInputRef}
            type='file'
            accept='image/*'
            onChange={handleFileChange}
            className='hidden'
          />
        </div>

        <h2 className='font-semibold text-2xl mb-2'>{title}</h2>
        <TagList tags={tags} isDefault />
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant='outline'>취소</Button>
        </DialogClose>
        <Button type='submit' onClick={handleSubmit}>
          등록하기
        </Button>
      </DialogFooter>
    </>
  )
}

export default SubmitContent
