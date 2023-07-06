import { Separator } from '@/components/ui/separator'

import BlogPostCard from '@/components/BlogPostCard'

export default async function Home() {
  return (
    <main className='container py-4'>
      <div className='mx-auto max-w-2xl divide-y divide-border rounded-md'>
        <BlogPostCard />
        <Separator />
        <BlogPostCard />
        <Separator />
        <BlogPostCard />
      </div>
    </main>
  )
}
