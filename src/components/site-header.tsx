import Link from 'next/link'
import { currentUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import PostCreateButton from '@/components/post-create-button'

import { Edit3 } from 'lucide-react'

import UserAvatar from '@/components/user-avatar'

export default async function SiteHeader() {
  const user = await currentUser()
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
          {!user ? (
            <>
              <Link href='/login'>
                <Button variant='secondary'>Login</Button>
              </Link>
              <Link href='/register'>
                <Button>Register</Button>
              </Link>
            </>
          ) : (
            <>
              <PostCreateButton
                className='text-primary'
                variant='outline'
                icon={false}
              />
              <UserAvatar />
            </>
          )}
        </div>
      </div>
    </header>
  )
}
