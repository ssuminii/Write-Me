export interface ReadmeCardProps {
  id: number
  title: string
  author: string
  thumbnailUrl?: string
  liked: boolean
  likes: number
}

export interface ReadmeData extends ReadmeCardProps {
  source: string
  hashtags: string[]
  comments: CommentData[]
}

export interface CommentData {
  id: number
  username: string
  content: string
  createdAt: string
}