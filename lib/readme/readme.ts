import { supabase } from '../supabase/supabase-client';
import type { CreateReadme } from '@/types';

// 리드미 전체 조회
export async function getReadmes(keyword?: string): Promise<CreateReadme[]> {
  let query = supabase
    .from('readmes')
    .select('*')
    .order('created_at', { ascending: false }); 

  if (keyword) {
    query = query.ilike('title', `%${keyword}%`);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(`데이터 로딩 실패: ${error.message}`);
  }

  return data;
}

// 리드미 개별 조회
export async function getReadmeById(id: string): Promise<CreateReadme | null> {
  const { data, error } = await supabase
    .from('readmes')
    .select('*')     
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(`상세 페이지 데이터 불러오기 실패: ${error.message}`);
  }

  return data;
}

// 리드미 생성
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