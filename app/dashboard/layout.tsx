import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import NavLinks from '../components/NavLinks';


export default async function DashboardLayout({children}: {children: React.ReactNode}){
    const session = await auth();
    const user = session?.user;

    if(!user){redirect("/login")}
    return(
        <div>
            <Suspense fallback={<nav className=" mx-auto px-1 max-w-screen  flex flew-rows-1 bg-blue-100"><p>Loading...</p></nav>}>
                <nav className=" mx-auto px-1 max-w-screen  flex flew-rows-1 bg-blue-100">
                    <NavLinks page="/dashboard" displayName="Dashboard"/> | {' '}
                    <NavLinks page="/dashboard/projects" displayName="Overview"/> | {' '}
                    <NavLinks page="/dashboard/projects/settings" displayName="Settings"/> | {' '}
                    <NavLinks page="/dashboard/projects/create" displayName="Create Project"/>
                </nav>
            </Suspense>
            
            {children}
        </div>
    )
}