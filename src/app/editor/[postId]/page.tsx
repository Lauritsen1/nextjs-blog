import { redirect } from 'next/navigation'

import { db } from '@/db'
import { posts } from '@/db/schema'
import { eq } from 'drizzle-orm'

import Editor from '@/components/editor'

export default async function Page({ params }: { params: { postId: string } }) {
  const post = await db.query.posts.findFirst({
    where: eq(posts.id, Number(params.postId)),
  })

  if (!post) {
    redirect('/dashboard')
  }

  return <Editor post={post} />
}
