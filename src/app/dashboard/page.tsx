import { db } from '@/db'

import { currentUser } from '@clerk/nextjs'

import PostCreateButton from '@/components/post-create-button'
import DashboardPostItem from '@/components/dashboard-post-item'

import { eq } from 'drizzle-orm'
import { posts } from '@/db/schema'

export default async function Dashboard() {
  const user = await currentUser()

  const allPosts = await db.query.posts.findMany({
    where: eq(posts.authorId, user!.id),
  })

  return (
    <div className='grid gap-8'>
      <div className='flex items-center justify-between px-2'>
        <div className='grid gap-1'>
          <h1 className='font-heading text-3xl font-bold md:text-4xl'>Posts</h1>
          <p className='text-lg text-muted-foreground'>
            Create and manage posts.
          </p>
        </div>
        <PostCreateButton icon={true} />
      </div>
      <div className='divide-y divide-border rounded-md border'>
        {allPosts.map((post: any) => {
          return <DashboardPostItem key={post.id} post={post} />
        })}
      </div>
    </div>
  )
}
