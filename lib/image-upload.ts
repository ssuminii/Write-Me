import { supabase } from '@/lib/supabase-client'

export const uploadImage = async (file: File): Promise<string | null> => {
  const fileExt = file.name.split('.').pop()
  const fileName = `${Date.now()}.${fileExt}`

  const { error } = await supabase.storage.from('images').upload(fileName, file)

  if (error) {
    console.error('이미지 업로드 실패:', error)
    return null
  }

  const {data: { publicUrl }} = supabase.storage.from('images').getPublicUrl(fileName)

  return publicUrl
}