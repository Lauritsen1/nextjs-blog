import SiteHeader from '@/components/site-header'
export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <main className='container py-6'>
        <div className='mx-auto max-w-2xl'>{children}</div>
      </main>
    </>
  )
}
