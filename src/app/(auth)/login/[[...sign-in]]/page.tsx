import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <main className='flex h-screen flex-col items-center justify-center'>
      <p className='mb-2 max-w-sm text-center text-sm'>
        Create an account or login with, <br /> Email:
        <span className='font-bold'> demo@example.com</span> and Password:
        <span className='font-bold'> demo123</span>
      </p>
      <SignIn />
    </main>
  )
}
