import { NextResponse } from 'next/server'

import { db } from '@/db'
import { posts, Post } from '@/db/schema'

type NewPost = Pick<Post, 'title' | 'content' | 'authorId'>

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { title, content, authorId } = body as NewPost

    const newPost = await db.insert(posts).values({
      title: title,
      content: content,
      authorId: authorId,
    })

    return NextResponse.json(newPost)
  } catch (error: any) {
    return new Response(error.message, {
      status: 400,
    })
  }
}
