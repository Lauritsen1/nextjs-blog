import { db } from '@/db'

import { Separator } from '@/components/ui/separator'

import PostItem from '@/components/post-item'

export default async function Home() {
  const posts = await db.query.posts.findMany({
    with: {
      author: true,
    },
  })

  return (
    <main>
      <div className='divide-y divide-border rounded-md'>
        {posts.map((post: any) => {
          return (
            <div key={post.id}>
              <PostItem post={post} />
              <Separator />
            </div>
          )
        })}
      </div>
    </main>
  )
}
