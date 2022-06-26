import { routeMap } from '@utils'
import { NextResponse, type NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
  const { locale, pathname, origin } = req.nextUrl

  // Skip public files
  if (PUBLIC_FILE.test(pathname)) return

  // Skip api/search requests
  if (pathname.startsWith('/api')) return
  if (pathname.startsWith('/search')) return
  if (pathname.startsWith('/blog')) return

  // Skip english
  if (locale === 'en') return

  // redirect if access en pages from tr site
  if (locale !== 'en') {
    const url = req.nextUrl.clone()
    for (const [key, value] of Object.entries(routeMap)) {
      if (pathname.startsWith(`/${key}`)) {
        url.pathname = url.pathname.replace(key, value)
        return NextResponse.redirect(url, 308)
      }
    }

    // special case comments
    // if (pathname.endsWith('/comments')) {
    //   url.pathname = url.pathname.replace('comments', 'yorumlar')
    //   return NextResponse.redirect(url, 308)
    // }
  }

  // route internally to en file paths
  let newPath = pathname
  for (const [key, value] of Object.entries(routeMap)) {
    if (pathname.startsWith(`/${value}`)) {
      newPath = pathname.replace(value, key)
      break
    }
  }

  return NextResponse.rewrite(
    new URL(`/${locale}${newPath}`, origin).toString()
  )
}
