import { authMiddleware } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default authMiddleware({
  publicRoutes: ['/:path*', '/api/webhooks/clerk', '/api/account/update'],
  afterAuth(auth, req, evt) {
    if (!auth.userId && req.nextUrl.pathname.includes('dashboard')) {
      redirect('/')
    }
  },
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
