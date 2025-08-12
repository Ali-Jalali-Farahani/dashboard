import { NextResponse, NextRequest } from 'next/server'

export function middleware(req:NextRequest){
    const token=req.cookies.get('token')?.value
    const path = req.nextUrl.pathname;

    if (path === '/login' && token === "QpwL5tke4Pnpja7X4") {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    if (path === '/dashboard' && token !== "QpwL5tke4Pnpja7X4") {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    
    return NextResponse.next();

}

export const config = {
  matcher: ['/login', '/dashboard/:path*'],
}