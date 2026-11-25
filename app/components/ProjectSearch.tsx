"use client"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from "use-debounce"




export function ProjectSearch(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();


    const handleSearch = useDebouncedCallback((term:string)=>{
        //changes the URL to include the new search parameters
        const params = new URLSearchParams(searchParams);
        
        if(term){
            params.set('query',term);
        }else{
            params.delete('query');
        }
        params.set('page','1');
        replace(`${pathname}?${params.toString()}`)//change URL without reloading page or changing browser history

    },300);


    return (
        <input
        className='bg-white mx-auto my-2 px-2 py-1 rounded-lg w-60'
            type="search"
            placeholder='Search Projects'
            defaultValue={searchParams.get('query')?.toString()}
            onChange={(e)=> handleSearch(e.target.value)}
        />
    );
}