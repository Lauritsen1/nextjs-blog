import { currentUser } from '@clerk/nextjs'

import { db } from '@/db'
import { posts } from '@/db/schema'

export async function POST(request: Request) {
  const user = await currentUser()

  try {
    const body = await request.json()

    const newPost = await db.insert(posts).values({
      title: body.title,
      content: body.content,
      authorId: user?.id,
    })

    return new Response(JSON.stringify(newPost), {
      status: 200,
    })
  } catch (error: any) {
    return new Response(error.message, {
      status: 400,
    })
  }
}
