'use client'

import { useState } from 'react'

import Link from 'next/link'

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
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

import { MoreVertical } from 'lucide-react'

export default function DashboardPostItem() {
  const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false)
  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
      <div>
        <Link href='#' className='font-semibold hover:underline'>
          Untitled Post
        </Link>
        <p className='text-sm text-muted-foreground'>July 6, 2023</p>
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
            <AlertDialogAction className='bg-destructive text-destructive-foreground hover:text-primary-foreground'>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
