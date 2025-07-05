import { supabase } from './supabase-client';
import type { CreateReadme } from '@/types';

export async function getReadmes(): Promise<CreateReadme[]> {
  const { data, error } = await supabase
    .from('readmes')
    .select('*')
    .order('created_at', { ascending: false }); 

  if (error) {
    throw new Error(`데이터 로딩 실패: ${error.message}`);
  }

  return data;
}
