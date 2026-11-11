import NavLinks from "../../components/NavLinks"

export default function ProjectsLayout({children}: {children: React.ReactNode}){
    return (
        <section>
            <nav className=" mx-auto px-1 max-w-screen  flex flew-rows-1 bg-blue-100">
                <NavLinks page="/projects" pageName="Overview"/> | {' '}
                <NavLinks page="/projects/open-source" pageName="Open Source"/> | {' '}
                <NavLinks page="/projects/school" pageName="School"/> | {' '}
                <NavLinks page="/projects/settings" pageName="Settings"/>

            </nav>
            {children}
        </section>
    )
}