import { db } from '@/db'
import { posts } from '@/db/schema'
import { eq } from 'drizzle-orm'

import edjsHTML from 'editorjs-html'

export default async function PostPage({
  params,
}: {
  params: { postId: string }
}) {
  // TODO: Create type for post
  const post: any = await db.query.posts.findFirst({
    where: eq(posts.id, Number(params.postId[1])),
  })

  const edjsParser = edjsHTML()
  const html: string[] = edjsParser.parse(post.content)

  return (
    <main className='prose prose-zinc dark:prose-invert'>
      {post && <h1 className='text-5xl font-bold'>{post.title}</h1>}
      {html.map((item, i) => {
        return <div key={i} dangerouslySetInnerHTML={{ __html: item }}></div>
      })}
    </main>
  )
}
