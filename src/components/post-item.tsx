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

export default function PostItem() {
  return (
    <Card className='border-none'>
      <CardHeader>
        <CardTitle>Lorem ipsum</CardTitle>
        <CardDescription>
          <span>Rasmus Lauritsen</span>
          <Dot className='inline-block' />
          <span>2 days ago</span>
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
        <Button variant='link'>Read More</Button>
      </CardFooter>
    </Card>
  )
}
