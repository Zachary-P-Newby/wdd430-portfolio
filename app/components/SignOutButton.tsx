// components/sign-out-button.tsx
import { signOut } from '@/auth';

export default function SignOutButton() {
  return (
    <form action={async () => {
      'use server';
      await signOut({ redirectTo: '/login' });
    }}>
      <button type="submit" className='text-sky-800 bg-white p-1 rounded-sm hover:text-white hover:bg-sky-800'>Sign Out</button>
    </form>
  );
}
/*
import { signOut } from '@/auth';

export default async function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut({ redirectTo: '/login' });
      }}
    >
      <button type="submit" className='text-sky-800 bg-white p-1 rounded-sm hover:text-white hover:bg-sky-800'>Sign Out</button>
    </form>
  );
}

*/