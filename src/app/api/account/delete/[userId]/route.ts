import { clerkClient } from '@clerk/nextjs/server'

export async function POST(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId
  try {
    await clerkClient.users.deleteUser(userId)
    return new Response('User deleted', { status: 200 })
  } catch (error: any) {
    return new Response(error.message, { status: 500 })
  }
}
