import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase-client'
import { createReadme } from '@/lib/create-readme'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    // 로그인 상태 확인
    const supabaseAuthHeader = req.headers.get('Authorization')
    const supabaseClient = supabase

    const { data: { user }, error: userError } = await supabaseClient.auth.getUser(supabaseAuthHeader?.replace('Bearer ', ''))

    if (userError || !user) {
      return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 })
    }

    // FormData 값 추출
    const file = formData.get('file') as File
    const title = formData.get('title') as string
    const tagsRaw = formData.get('tags') as string
    const source = formData.get('source') as string

    if (!file) {
      return NextResponse.json({ error: '썸네일 파일이 필요합니다.' }, { status: 400 })
    }

    const tags: string[] = JSON.parse(tagsRaw)

    // 썸네일 업로드
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}.${fileExt}`

    const { error: uploadError } = await supabase
      .storage
      .from('images')
      .upload(`thumbnails/${fileName}`, file)

    if (uploadError) {
      return NextResponse.json({ error: uploadError.message }, { status: 500 })
    }

    const { data: publicUrlData } = supabase
      .storage
      .from('images')
      .getPublicUrl(`thumbnails/${fileName}`)

    const thumbnailUrl = publicUrlData.publicUrl

    // DB에 저장
    await createReadme({
      title,
      author: user.email ?? '',
      thumbnail: thumbnailUrl,
      hashtags: tags,
      source,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

