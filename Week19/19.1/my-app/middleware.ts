// import {NextRequest,NextResponse} from 'next/server'
// let requestcount=0;
// export function middleware(req:NextRequest) {
//     requestcount++;
//     console.log(requestcount);
//     NextResponse.next();

// }

// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/api/:path*',
//   }


import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname)
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.next()
  }
}