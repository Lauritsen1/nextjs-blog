import Link from 'next/link'

import dayjs from 'dayjs'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { Dot } from 'lucide-react'

import { Post, User } from '@/db/schema'

type PostWithUser = Post & {
  author: User
}

export default function PostItem({ post }: { post: PostWithUser }) {
  const date = dayjs(post.createdAt).format('MMM D, YYYY')
  return (
    <Card className='border-none'>
      <CardHeader>
        <CardTitle>
          <Link href={`/${post.id}`}>{post.title}</Link>
        </CardTitle>
        <CardDescription>
          <span>{post.author.username}</span>
          <Dot className='inline-block' />
          <span>{date}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
          nesciunt!
        </p>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Badge className='cursor-pointer'>News</Badge>
        <Link href={`/${post.id}`}>
          <Button variant='link'>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
