import { notFound } from 'next/navigation'

import { db } from '@/db'
import { posts } from '@/db/schema'
import { eq } from 'drizzle-orm'

import edjsHTML from 'editorjs-html'

import { OutputData } from '@editorjs/editorjs'

export default async function PostPage({
  params,
}: {
  params: { postId: string }
}) {
  // TODO: Create type for post
  const post = await db.query.posts.findFirst({
    where: eq(posts.id, Number(params.postId)),
  })

  if (!post) {
    notFound()
  }

  const edjsParser = edjsHTML()
  const postContent: OutputData | null = post?.content as OutputData | null
  const html: string[] = postContent ? edjsParser.parse(postContent) : []

  return (
    <main className='prose prose-zinc dark:prose-invert'>
      {post && <h1 className='text-5xl font-bold'>{post.title}</h1>}
      {html.map((item, i) => {
        return <div key={i} dangerouslySetInnerHTML={{ __html: item }}></div>
      })}
    </main>
  )
}
