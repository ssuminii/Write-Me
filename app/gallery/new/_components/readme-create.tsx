'use client'

import Markdown from '@/components/markdown'
import { Button, UnderlineInput } from '@/components/ui'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui'
import SubmitContent from './submit-content'
import { useState, useRef } from 'react'
import { TagList } from '@/components/ui'

const ReadmeCreate = () => {
  const [markdown, setMarkdown] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [tagInput, setTagInput] = useState<string>('')
  const [tags, setTags] = useState<string[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  const handleAddTag = () => {
    const trimmed = tagInput.trim()
    if (trimmed && !tags.includes(trimmed)) {
      setTags((prev) => [...prev, trimmed])
    }
    setTagInput('')
  }

  const handleRemoveTag = (label: string) => {
    setTags((prev) => prev.filter((tag) => tag !== label))
  }

  return (
    <Dialog>
      <div className='flex flex-col gap-10 h-screen pt-10 relative'>
        <div className='flex flex-col gap-4 ml-10'>
          <UnderlineInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title을 입력해주세요'
          />
          <div className='flex flex-col gap-2'>
            <input
              ref={inputRef}
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  handleAddTag()
                }
              }}
              onBlur={handleAddTag}
              placeholder='태그를 입력하고 Enter를 누르세요'
              className='focus:outline-none w-[300px]'
            />
            <TagList tags={tags} onRemove={handleRemoveTag} />
          </div>
        </div>
        <div className='flex gap-2 fixed bottom-10 right-10 z-50'>
          <Button variant='outline'>임시저장</Button>
          <DialogTrigger asChild>
            <Button disabled={title.trim() === '' || tags.length === 0 || markdown.trim() === ''}>
              등록하기
            </Button>
          </DialogTrigger>
        </div>
        <Markdown
          value={markdown}
          onChange={(value) => setMarkdown(value)}
          className='flex-1 p-2'
        />
      </div>

      <DialogContent className='sm:max-w-[425px]'>
        <SubmitContent title={title} tags={tags} source={markdown} />
      </DialogContent>
    </Dialog>
  )
}

export default ReadmeCreate
