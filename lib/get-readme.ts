import { createClient } from '@/lib/supabase-server';
import type { CreateReadme } from '@/types';

export async function getReadmes(keyword?: string): Promise<CreateReadme[]> {
  const supabase = await createClient()

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
