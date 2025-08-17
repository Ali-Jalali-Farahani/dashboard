import { NextResponse, NextRequest } from 'next/server'

export async function middleware(req:NextRequest){
    const accessToken=req.cookies.get('accessToken')?.value
    const path = req.nextUrl.pathname;

    const data=await fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
            'Authorization': String(accessToken)
        },
        // credentials: 'include' // Include cookies (e.g., accessToken) in the request
    })
        .then(res => res.json())
        .then(data => data)


    console.log(data.message)

    if(data.message=='Invalid/Expired Token!'){
        console.log('Not logged in')
        req.cookies.delete('accessToken')
    }

    if (path === '/login' && data.message!='Invalid/Expired Token!' && data.message!='Access Token is required') {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    if (path === '/dashboard' && (data.message=='Invalid/Expired Token!'|| data.message=='Access Token is required')) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();

}

export const config = {
  matcher: ['/login', '/dashboard'],
}


