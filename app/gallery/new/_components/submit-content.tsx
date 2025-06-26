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

interface SubmitContentProps {
  title: string
  tags: string[]
}

const SubmitContent = ({ title, tags }: SubmitContentProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleUpload = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    setFile(selectedFile)
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

  return (
    <>
      <DialogHeader>
        <DialogTitle>README Preview</DialogTitle>
      </DialogHeader>
      <div className='flex flex-col'>
        <div className='self-end'>
          <Button variant='link' onClick={handleUpload}>
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
              <Button variant='secondary' className='font-semibold' onClick={handleUpload}>
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
        <TagList tags={tags} />
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant='outline'>취소</Button>
        </DialogClose>
        <Button type='submit'>등록하기</Button>
      </DialogFooter>
    </>
  )
}

export default SubmitContent
