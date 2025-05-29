'use client'

import { useRef, useState } from 'react'
import { Button, Input } from '@/components/ui'

interface SizeProps {
  width: number
  height: number
}

interface ImageUploadProps {
  onImageUpload: (markdownImageHtml: string) => void
}

const ImageUpload = ({ onImageUpload }: ImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [size, setSize] = useState<SizeProps | null>(null)

  const handleUpload = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    setFile(selectedFile)

    const img = new Image()
    const imageUrl = URL.createObjectURL(selectedFile)

    img.src = imageUrl

    img.onload = () => {
      setSize({ width: img.width, height: img.height })

      const markdown = `
            <p align="center">
              <img src="${imageUrl} alt="mainImage"" />
            </p>
                  `.trim()

      onImageUpload(markdown)

      URL.revokeObjectURL(img.src)
    }
  }

  return (
    <form
      className='flex flex-col items-center gap-4'
      onSubmit={(e) => {
        e.preventDefault()
        handleUpload()
      }}
    >
      <Button type='submit' className='w-[300px]'>
        Image Upload
      </Button>

      <input
        ref={fileInputRef}
        type='file'
        accept='image/*'
        onChange={handleFileChange}
        className='hidden'
      />

      {file && <span className='text-primary'>선택된 파일: {file.name}</span>}

      <div className='flex gap-6'>
        <div className='flex items-center gap-4'>
          <label htmlFor='width' className='w-16'>
            Width
          </label>
          <Input id='width' name='width' value={size?.width ?? ''} readOnly />
        </div>

        <div className='flex items-center gap-4'>
          <label htmlFor='height' className='w-16'>
            Height
          </label>
          <Input id='height' name='height' value={size?.height ?? ''} readOnly />
        </div>
      </div>
    </form>
  )
}

export default ImageUpload
