import { db } from '@/db'
import { posts } from '@/db/schema'
import { eq, and } from 'drizzle-orm'

import edjsHTML from 'editorjs-html'

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const postId = Number(params.slug)

  // TODO: Create type for post
  const post: any = await db.query.posts.findFirst({
    where: eq(posts.id, postId),
  })

  const edjsParser = edjsHTML()
  const html: string[] = edjsParser.parse(post.content)

  return (
    <main className='container prose prose-zinc py-4 dark:prose-invert'>
      {post && <h1 className='text-5xl font-bold'>{post.title}</h1>}
      {html.map((item, i) => {
        return <div key={i} dangerouslySetInnerHTML={{ __html: item }}></div>
      })}
    </main>
  )
}
