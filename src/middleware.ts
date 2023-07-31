import { authMiddleware } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default authMiddleware({
  afterAuth(auth, req, evt) {
    if (!auth.userId && req.nextUrl.pathname.includes('dashboard')) {
      redirect('/')
    }
  },
  publicRoutes: [
    '/:username/:postId',
    '/api/webhooks/clerk',
    '/api/account/update',
  ],
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
