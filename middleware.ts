import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Routes that can be accessed while signed out
  // this will also contain the ones we will create in dew time:
  // '/', '/events/:id', '/api/webhook/clerk', '/api/webhook/stripe', '/api/uploadthing'

  publicRoutes: [
    '/', 
    '/events/:id', 
    '/api/webhook/clerk', 
    '/api/webhook/stripe', 
    '/api/uploadthing'
  ],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: [
    '/api/webhook/clerk', 
    '/api/webhook/stripe', 
    '/api/uploadthing'
  ],
});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};