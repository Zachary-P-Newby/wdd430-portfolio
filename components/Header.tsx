import NavLinks from './NavLinks';


export default function Header(){
    return (
        <header className="bg-blue-500 text-white p-4 shadow-md flex justify-between items-center">
            <div id="header-title" className="font-bold text-lg">
                <h1>Zach Newby</h1>
            </div>
            <nav>
                <ul className="flex gap-6">
                    <li><NavLinks page="/" pageName="Home"/></li>
                    <li><NavLinks page="/about" pageName="About"/></li>
                    <li><NavLinks page="/projects" pageName="Projects"/></li>
                    <li><NavLinks page="/funny" pageName="Funny Stuff"/></li>
                </ul>
            </nav>
        </header>
    )
}