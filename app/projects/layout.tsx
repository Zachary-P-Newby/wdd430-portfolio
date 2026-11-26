import { Suspense } from "react"
import NavLinks from "../components/NavLinks"
import { connection } from 'next/server'



export default async function ProjectsLayout({children}: {children: React.ReactNode}){
    await connection()
    
    return (
        <section>
            <Suspense fallback={<nav className=" mx-auto px-1 max-w-screen  flex flew-rows-1 bg-blue-100"><p>Loading...</p></nav>}>
                <nav className=" mx-auto px-1 max-w-screen  flex flew-rows-1 bg-blue-100">
                <NavLinks page="/projects" displayName="Overview"/> | {' '}
                <NavLinks page="/projects/open-source" displayName="Open Source"/> | {' '}
                <NavLinks page="/projects/school" displayName="School"/>
            </nav>
            </Suspense>
            
            {children}
        </section>
    )
}