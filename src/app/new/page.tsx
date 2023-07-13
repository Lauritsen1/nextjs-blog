import Editor from '@/components/editor'

export default async function Page() {
  return (
    <main className='container py-4'>
      <div className='mx-auto max-w-[700px]'>
        <Editor />
      </div>
    </main>
  )
}
