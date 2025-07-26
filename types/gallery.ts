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
  user_id?: string
  user_email: string
  content: string
  created_at: string
}

export interface CreateReadme {
  id: string
  title: string
  author: string
  thumbnail: string
  hashtags: string[]
  source: string
  created_at: string
}

export interface CreateReadmeInput {
  file: File
  title: string
  hashtags: string[]
  source: string
  author: string
}