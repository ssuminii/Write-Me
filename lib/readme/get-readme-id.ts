import { createClient } from '../supabase/supabase-server';
import type { CreateReadme } from '@/types';

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
