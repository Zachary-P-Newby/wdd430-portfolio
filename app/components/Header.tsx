import Link from 'next/link';

export default function Header(){
    return (
        <header className="bg-blue-500 text-white p-4 shadow-md flex justify-between items-center">
            <div id="header-title" className="font-bold text-lg">
                <h1>Zach Newby</h1>
            </div>
            <nav>
                <ul className="flex gap-6">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}