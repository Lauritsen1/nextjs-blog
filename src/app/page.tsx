import BlogPostCard from '@/components/BlogPostCard'

import { db } from '@/db/index'
import { post } from '@/db/schema'

export default async function Home() {
  await db.insert(post).values({
    title: 'Lorem ipsum',
    content: 'Teeeeeeeeeeeeeeest',
  })

  return (
    <main className='container py-4'>
      <BlogPostCard />
    </main>
  )
}
