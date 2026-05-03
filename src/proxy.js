import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers';

export async function proxy(request) {

    const { pathname } = request.nextUrl;

    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (pathname.startsWith('/profile')) {
        if (!session) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    if (pathname.startsWith('/products') && pathname !== '/products') {
        if (!session) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    return NextResponse.next()



}

export const config = {
    matcher: ['/profile', '/products/:path*'],
}