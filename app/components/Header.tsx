import { Suspense } from 'react';
import NavLinks from './NavLinks';
import {auth} from '@/auth';
import SignOutButton from './SignOutButton';


export default async function Header(){

    const session = await auth();
    const user = session?.user;

    return (
        <header className="bg-blue-500 text-white p-4 shadow-md flex justify-between items-center">
            <div id="header-title" className="font-bold text-lg">
                <h1>Zach Newby</h1>
            </div>
            <nav>
                <Suspense fallback={<ul className="flex gap-6"><li><p>Loading</p></li></ul>}>
                    <ul className="flex gap-6">
                        <li><NavLinks page="/" displayName="Home"/></li>
                        <li><NavLinks page="/about" displayName="About"/></li>
                        <li><NavLinks page="/projects" displayName="Projects"/></li>
                        <li><NavLinks page="/funny" displayName="Funny Stuff"/></li>
                        {user? <li><NavLinks page="/dashboard" displayName="Dashboard"/></li> : "" }
                        {user? <li><SignOutButton/></li>:<li><NavLinks page="/login" displayName="Login"/></li> }
                    </ul>

                </Suspense>
                
            </nav>
        </header>
    )
}