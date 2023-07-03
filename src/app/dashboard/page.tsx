import { H1, H3, H2 } from '@/components/Typography'
import DashboardPostCard from '@/components/DashboardPostCard'

export default async function Dashboard() {
  return (
    <main className='container py-4'>
      <H1 className='mb-2'>Dashboard</H1>
      <div className='mx-auto max-w-lg space-y-2'>
        <DashboardPostCard />
        <DashboardPostCard />
      </div>
    </main>
  )
}
