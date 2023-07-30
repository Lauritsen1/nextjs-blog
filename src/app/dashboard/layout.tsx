import SiteHeader from '@/components/site-header'
import DashboardNav from '@/components/dashboard-nav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <div className='container grid flex-1 gap-12 py-8 md:grid-cols-[200px_1fr]'>
        <DashboardNav />
        <main>{children}</main>
      </div>
    </>
  )
}
