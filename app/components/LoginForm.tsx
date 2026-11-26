// components/login-form.tsx
'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className='bg-white rounded-lg p-2 flex flex-col justify-center items-center gap-4 text-xl'>
      <div className='bg-sky-100 rounded-md p-4 flex flex-col justify-center items-center gap-4 '>
        <label htmlFor="email" className='font-bold'>Email</label>
        <input id="email" type="email" name="email" required className='border border-solid border-blue-800 border-2 rounded-md bg-slate-100 focus:bg-white ' />
      </div>
      <div className='bg-sky-100 rounded-md p-4 flex flex-col justify-center items-center gap-4'>
        <label htmlFor="password" className='font-bold'>Password</label>
        <input id="password" type="password" name="password" minLength={6} required className='border border-solid border-blue-800 border-2 rounded-md bg-slate-100 focus:bg-white'/>
      </div>
      <button aria-disabled={isPending} type="submit" className='bg-sky-700 font-bold text-white hover:bg-indigo-500 p-3 rounded-sm hover:scale-110'>
        {isPending ? 'Signing in...' : 'Sign In'}
      </button>
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  );
}