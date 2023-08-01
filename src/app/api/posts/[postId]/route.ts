import { db } from '@/db'
import { posts } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function DELETE(
  request: Request,
  { params }: { params: { postId: string } }
) {
  const postId = Number(params.postId)
  try {
    await db.delete(posts).where(eq(posts.id, postId))

    return new Response('Post deleted', {
      status: 200,
    })
  } catch (error: any) {
    return new Response(error.message, {
      status: 400,
    })
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { postId: string } }
) {
  const postId = Number(params.postId)
  const body = await request.json()
  try {
    await db
      .update(posts)
      .set({ ...body })
      .where(eq(posts.id, postId))

    return new Response('Post updated', {
      status: 200,
    })
  } catch (error: any) {
    return new Response(error.message, {
      status: 400,
    })
  }
}
