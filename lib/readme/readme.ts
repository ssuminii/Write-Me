import { createClient } from '@/lib/supabase/supabase-server';
import type { CreateReadme } from '@/types';

// 리드미 전체 조회
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

// 리드미 개별 조회
export async function getReadmeById(id: string): Promise<CreateReadme | null> {
  const supabase = await createClient();

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


