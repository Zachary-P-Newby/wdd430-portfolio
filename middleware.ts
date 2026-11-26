// middleware.ts  (project root)
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|.*\\.png$).*)',
      missing: [{ type: 'header', key: 'next-action' }],
    },
  ],
};