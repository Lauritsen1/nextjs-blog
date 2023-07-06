import { Separator } from '@/components/ui/separator'

import PostItem from '@/components/post-item'

export default async function Home() {
  return (
    <main className='container py-4'>
      <div className='mx-auto max-w-2xl divide-y divide-border rounded-md'>
        <PostItem />
        <Separator />
        <PostItem />
        <Separator />
        <PostItem />
      </div>
    </main>
  )
}
