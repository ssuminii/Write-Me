'use client'

import { useRef, useState } from 'react'
import { Button, Label, LabelInput } from '@/components/ui'
import { uploadImage } from '@/api'
import type { ImageUploadProps } from '@/types'

const ImageUpload = ({ image, onImageUploadChange, label }: ImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [file, setFile] = useState<File | null>(null)

  const handleUpload = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    setFile(selectedFile)

    const imageUrl = await uploadImage(selectedFile)
    if (!imageUrl) return

    const img = new Image()
    img.src = imageUrl

    img.onload = () => {
      onImageUploadChange({
        imageUrl: imageUrl,
        size: {
          width: img.width,
          height: img.height,
        },
      })
    }
  }

  const handleSizeChange = (key: 'width' | 'height', value: string) => {
    const num = parseInt(value) || 0
    const newSize = {
      width: key === 'width' ? num : image.size.width,
      height: key === 'height' ? num : image.size.height,
    }
    onImageUploadChange({ imageUrl: image.imageUrl, size: newSize })
  }

  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={(e) => {
        e.preventDefault()
        handleUpload()
      }}
    >
      {label && <Label>{label}</Label>}

      <div className='flex flex-col items-center gap-4'>
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

        {file && <span className='text-primary text-sm'>선택된 파일: {file.name}</span>}

        <div className='flex gap-8'>
          <LabelInput
            id='width'
            label='Width'
            type='number'
            value={image?.size?.width?.toString() ?? 0}
            onChange={(value) => handleSizeChange('width', value)}
            pos='row'
            disabled={!image.imageUrl}
          />
          <LabelInput
            id='height'
            label='Height'
            type='number'
            value={image?.size?.height?.toString() ?? 0}
            onChange={(value) => handleSizeChange('height', value)}
            pos='row'
            disabled={!image.imageUrl}
          />
        </div>
      </div>
    </form>
  )
}

export default ImageUpload
