import { Suspense } from "react"
import NavLinks from "../components/NavLinks"

export default function ProjectsLayout({children}: {children: React.ReactNode}){
    return (
        <section>
            <Suspense fallback={<nav className=" mx-auto px-1 max-w-screen  flex flew-rows-1 bg-blue-100"><p>Loading...</p></nav>}>
                <nav className=" mx-auto px-1 max-w-screen  flex flew-rows-1 bg-blue-100">
                <NavLinks page="/projects" displayName="Overview"/> | {' '}
                <NavLinks page="/projects/open-source" displayName="Open Source"/> | {' '}
                <NavLinks page="/projects/school" displayName="School"/> | {' '}
                <NavLinks page="/projects/settings" displayName="Settings"/> | {' '}
                <NavLinks page="/projects/create" displayName="Create Project"/>
            </nav>
            </Suspense>
            
            {children}
        </section>
    )
}