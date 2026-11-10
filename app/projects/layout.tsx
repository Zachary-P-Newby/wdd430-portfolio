import NavLinks from "../../components/NavLinks"

export default function ProjectsLayout({children}: {children: React.ReactNode}){
    return (
        <section>
            <nav className=" m-0 min-w-screen flex flew-rows-1 bg-blue-100">
                <NavLinks page="/projects" pageName="Overview"/> | {' '}
                <NavLinks page="/projects/opensource" pageName="Open Source"/> | {' '}
                <NavLinks page="/projects/school" pageName="School"/> | {' '}
                <NavLinks page="/projects/settings" pageName="Settings"/>

            </nav>
            {children}
        </section>
    )
}