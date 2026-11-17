'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";


interface NavlinkProp{
    page: string,
    displayName: string
}


export default function Navlinks(props:NavlinkProp){
    const pathname = usePathname();

    return(

        <nav className="p-1 m-0">
            <Link
            href={props.page}
            className={pathname === props.page 
                ? "text-white bg-sky-800 p-1 rounded-sm" 
                : "text-sky-800 bg-white p-1 rounded-sm"
            }
            aria-current={pathname === props.page ? 'page' : undefined}
            >
            {props.displayName}
            </Link>
        </nav>

    )
}