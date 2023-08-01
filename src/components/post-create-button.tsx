'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Button, ButtonProps, buttonVariants } from '@/components/ui/button'

import { Plus, Loader2 } from 'lucide-react'

interface PostCreateButtonProps extends ButtonProps {
  icon?: boolean
}

export default function PostCreateButton({
  variant,
  icon,
  className,
}: PostCreateButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const createPost = async () => {
    setIsLoading(true)

    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Untitled Post',
      }),
    })

    const post = await response.json()

    router.push(`/editor/${post.insertId}`)
  }
  return (
    <Button
      className={cn(buttonVariants({ variant }), className)}
      onClick={createPost}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
      ) : (
        <>{icon && <Plus className='mr-2 h-4 w-4' />}</>
      )}
      Create Post
    </Button>
  )
}
