"use client"
import {usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"

export default function Pagination({totalPages}:{totalPages:number}){
    
    function createPageURL(pathname:string, pageNumber:number, query?:string){
        
        if(query){
            return `${pathname}?query=${query}&page=${pageNumber}`;
        }
        else{
            return `${pathname}?page=${pageNumber}`;
        }
        
    }
    
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page"));
    const query = searchParams.get("query");
    
    let nextPageURL;
    let prevPageURL;

    let prevPageNum = currentPage -1;
    if (prevPageNum < 1){
        prevPageNum = 1;
    }
    let nextPageNum = currentPage +1;
    if (nextPageNum > totalPages){
        nextPageNum = totalPages;
    }
    
    if(query){
        nextPageURL = createPageURL(pathname,nextPageNum,query);
        prevPageURL = createPageURL(pathname,prevPageNum,query);
    }else{
        nextPageURL = createPageURL(pathname,nextPageNum);
        prevPageURL = createPageURL(pathname,prevPageNum);
    }

    
    return(
        <div className="p-2 bg-white text-black max-w-60 rounded-lg mx-auto text-center">
            <Link className="hover:text-indigo-500" href={prevPageURL}>Prev</Link> / <Link className="hover:text-indigo-500" href={nextPageURL}>Next</Link>
        </div>
    )
}

