import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

import { Edit3 } from 'lucide-react'

import UserAvatar from '@/components/user-avatar'

export default function SiteHeader() {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur'>
      <div className='container flex h-14 items-center justify-between'>
        <Link href='/'>
          <span className='flex items-end font-bold'>
            <Edit3 size={24} />
            <span>Blog.</span>
          </span>
        </Link>

        <div className='flex space-x-4'>
          <ThemeToggle />
          <Link className='h-full w-full' href='/new'>
            <Button variant='outline'>Create Post</Button>
          </Link>
          <UserAvatar />
        </div>
      </div>
    </header>
  )
}
