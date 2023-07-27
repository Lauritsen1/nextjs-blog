'use client'

import Link from 'next/link'

import { useUser } from '@clerk/nextjs'
import { useClerk } from '@clerk/clerk-react'

import { User, LayoutDashboard, Settings, LogOut } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

import { generateInitials } from '@/lib/utils'

export default function UserAvatar() {
  const { user } = useUser()
  const { signOut } = useClerk()

  const initials = generateInitials(user?.firstName, user?.lastName)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={user?.imageUrl} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem>
          <Link href='#' className='flex w-full items-center'>
            <User className='mr-2 h-4 w-4' />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href='/dashboard' className='flex w-full items-center'>
            <LayoutDashboard className='mr-2 h-4 w-4' />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href='#' className='flex w-full items-center'>
            <Settings className='mr-2 h-4 w-4' />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className='flex w-full cursor-pointer items-center'
          onClick={() => signOut()}
        >
          <LogOut className='mr-2 h-4 w-4' />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
