import { supabase } from '../supabase/supabase-client';
import type { CreateReadme } from '@/types';

export async function createReadme(params: CreateReadme) {
  const { title, author, thumbnail, hashtags, source } = params

  const { data, error } = await supabase
    .from('readmes')
    .insert([
      {
        title,
        author,
        thumbnail,
        hashtags,
        source,
      },
    ])
    .select()

  if (error) {
    throw new Error(`데이터 삽입 실패: ${error.message}`)
  }

  return data
}