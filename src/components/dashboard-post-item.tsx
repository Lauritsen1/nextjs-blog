'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { useState } from 'react'

import dayjs from 'dayjs'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

import { MoreVertical, Loader2 } from 'lucide-react'

export default function DashboardPostItem({ post }: { post: any }) {
  const router = useRouter()
  const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false)
  const date = dayjs(post.createdAt).format('MMM D, YYYY')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function deletePost() {
    setIsLoading(true)
    const response = await fetch(`/api/posts/${post.id}`, {
      method: 'DELETE',
    })
    setIsLoading(false)
    setShowDeleteAlert(false)
    router.refresh()
  }

  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
      <div>
        <Link href='#' className='font-semibold hover:underline'>
          {post.title}
        </Link>
        <p className='text-sm text-muted-foreground'>{date}</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' size='icon'>
            <MoreVertical className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem className='cursor-pointer'>
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className='cursor-pointer'
            onSelect={() => setShowDeleteAlert(true)}
          >
            <span className='text-destructive'>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this post?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              onClick={deletePost}
              variant='destructive'
              disabled={isLoading}
            >
              {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
