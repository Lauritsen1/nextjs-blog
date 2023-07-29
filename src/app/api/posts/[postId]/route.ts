import { db } from '@/db'
import { posts } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function DELETE(
  request: Request,
  { params }: { params: { postId: string } }
) {
  const postId = Number(params.postId)
  await db.delete(posts).where(eq(posts.id, postId))
}
