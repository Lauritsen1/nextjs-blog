import { authMiddleware } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export default authMiddleware({
  publicRoutes: ['/:path*', '/api/webhooks/clerk', '/api/account/update'],
  afterAuth(auth, req, evt) {
    if (!auth.userId && req.nextUrl.pathname.includes('dashboard')) {
      const url = req.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.redirect(url)
    }
  },
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
