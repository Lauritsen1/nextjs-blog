import { Button } from '@/components/ui/button'

import DashboardPostCard from '@/components/DashboardPostCard'

import { Plus } from 'lucide-react'

export default async function Dashboard() {
  return (
    <div className='grid gap-8'>
      <div className='flex items-center justify-between px-2'>
        <div className='grid gap-1'>
          <h1 className='font-heading text-3xl font-bold md:text-4xl'>Posts</h1>
          <p className='text-lg text-muted-foreground'>
            Create and manage posts.
          </p>
        </div>
        <Button>
          <Plus className='mr-2 h-4 w-4' />
          Create Post
        </Button>
      </div>
      <div className='divide-y divide-border rounded-md border'>
        <DashboardPostCard />
        <DashboardPostCard />
      </div>
    </div>
  )
}
