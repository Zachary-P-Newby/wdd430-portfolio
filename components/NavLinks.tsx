'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProp {
    page: string,
    pageName : string
}


export default function NavLinks(props:NavLinkProp){
    const pathname = usePathname();
    return(
        <nav className="p-1 m-0" aria-label="Primary">
            <Link 
            href={props.page}
            className={pathname === props.page ? 'text-white bg-sky-800 p-1 rounded-sm' : 'text-sky-800 bg-white p-1 rounded-sm'}
            aria-current={pathname === props.page ? 'page' : undefined}
            >{props.pageName}</Link>
        </nav>
    )
}

//