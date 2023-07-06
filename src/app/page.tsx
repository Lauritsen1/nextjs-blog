import BlogPostCard from '@/components/BlogPostCard'
import Post from '@/components/mdx/post.mdx'

export default async function Home() {
  return (
    <main className='container py-4'>
      <BlogPostCard />
      <Post />
    </main>
  )
}
