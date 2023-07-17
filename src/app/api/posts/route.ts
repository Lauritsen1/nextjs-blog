import { NextResponse } from 'next/server'

import { db } from '@/db'
import { posts } from '@/db/schema'

interface BodyData {
  title: string | null
  content: string | null
}

export async function POST(request: Request) {
  const body = await request.json()

  const { title, content } = body as BodyData

  const newPost = await db.insert(posts).values({
    title: title,
    content: content,
  })

  return NextResponse.json(newPost)
}
