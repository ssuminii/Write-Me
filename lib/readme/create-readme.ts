import { supabase } from '../supabase/supabase-client'

export async function createReadme({
  file,
  title,
  hashtags,
  source,
  author,
}: {
  file: File
  title: string
  hashtags: string[]
  source: string
  author: string
}): Promise<{ success: boolean; error?: string }> {
  const fileExt = file.name.split('.').pop()
  const fileName = `${Date.now()}.${fileExt}`

  // 썸네일 업로드
  const { error: uploadError } = await supabase
    .storage
    .from('images')
    .upload(`thumbnails/${fileName}`, file)

  if (uploadError) {
    return { success: false, error: uploadError.message }
  }

  // public URL 가져오기
  const { data: publicUrlData } = supabase
    .storage
    .from('images')
    .getPublicUrl(`thumbnails/${fileName}`)

  const thumbnailUrl = publicUrlData.publicUrl

  // readmes 테이블에 insert
  const { error: insertError } = await supabase
    .from('readmes')
    .insert([
      {
        title,
        author,
        thumbnail: thumbnailUrl,
        hashtags,
        source,
      },
    ])

  if (insertError) {
    return { success: false, error: insertError.message }
  }

  return { success: true }
}
