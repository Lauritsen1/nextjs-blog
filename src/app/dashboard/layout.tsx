'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'

import { usePathname } from 'next/navigation'

import { Newspaper, Settings } from 'lucide-react'

const links = [
  {
    title: 'Posts',
    href: '/dashboard',
    icon: Newspaper,
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <div className='container grid flex-1 gap-12 py-8 md:grid-cols-[200px_1fr]'>
      <aside className='hidden flex-col md:flex'>
        <nav className='grid gap-2'>
          {links.map((link) => (
            <Link key={link.title} href={link.href}>
              <span
                className={cn(
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                  {
                    'bg-accent text-accent-foreground': pathname === link.href,
                  }
                )}
              >
                <link.icon className='mr-2 h-4 w-4' />
                <span>{link.title}</span>
              </span>
            </Link>
          ))}
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  )
}
