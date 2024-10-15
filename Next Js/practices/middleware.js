import { NextResponse } from "next/server"

export const middleware = (request) => {

    console.log('middleware')
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher:'/login/loginUsers/Users/:path'
} 
//The middleware file is used to write Middleware and run code on the server before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.
// Middleware executes before routes are rendered. It's particularly useful for implementing custom server-side logic like authentication, logging, or handling redirects.