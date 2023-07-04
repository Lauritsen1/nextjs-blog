import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

import { Button } from '@/components/ui/button'

import { Edit, Trash2 } from 'lucide-react'

export default function DashboardPostCard() {
  return (
    <Card className='flex items-center justify-between'>
      <CardHeader className='w-full'>
        <div className='flex items-center justify-between'>
          <div>
            <CardTitle className='text-lg'>Lorem ipsum</CardTitle>
            <CardDescription>
              <span>Published: Jul 3</span>
            </CardDescription>
          </div>
          <div className='space-x-2'>
            <Button variant='ghost' size='icon'>
              <Edit className='h-4 w-4' />
            </Button>

            <AlertDialog>
              <AlertDialogTrigger>
                <Button variant='destructive' size='icon'>
                  <Trash2 className='h-4 w-4' />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your post and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className='bg-destructive text-destructive-foreground'>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
