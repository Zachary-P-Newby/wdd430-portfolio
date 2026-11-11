import { ProjectSearch } from "@/components/ProjectSearch";
import ProjectList from "../../components/ProjectList";
import Pagination from "@/components/Pagination";




export default async function Projects(props:{
        searchParams?: Promise<{query?:string, page?:string}>
})
{
    const searchParams = await props.searchParams;
	const query = searchParams?.query || null;
	const currentPage = Number(searchParams?.page) || 1;

    //fetch data
    const origin = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}`: "http://localhost:3000";
    let response;
    if(query){
        response = await fetch(`${origin}/api/projects?query=${query}&page=${currentPage}`);
    }
    else{
        response = await fetch(`${origin}/api/projects?page=${currentPage}`);
    }
  
  
  
  if(response.ok){
    const data = await response.json();
    const projects = data.projects;
    const pages = data.pages;

    return(
        <main className="mx-auto px-30 py-12 bg-blue-200 w-full min-h-screen m-0">
            <h1 className="text-cyan-900 font-bold">Projects Overview</h1>
            <section className="bg-sky-800 px-8 py-4 rounded-lg min-h-60 flex flex-col">
                    <article className="bg-orange-200 mx-10 my-4 px-4 py-4 rounded-lg text-center">
                        <h1 className="text-gray-900 font-bold">Search Projects</h1>
                        <ProjectSearch/>
                        <Pagination totalPages={pages}/>
                        
                    </article>
                    
                    <article className="bg-sky-100 mx-10 my-4 px-4 py-4 rounded-lg min-h-60">
                        <ProjectList projects={projects} />
                    </article>
                    
                </section>
            </main>
    )
  }else{
    return(
        <main className="mx-auto px-30 py-12 bg-blue-200 w-full min-h-screen m-0">
            <h1 className="text-cyan-900">Projects Overview</h1>
            <section className="bg-sky-800 px-8 py-4 rounded-lg min-h-60">
                    <h1 className="text-cyan-100">Projects Unavailible</h1>
                </section>
            </main>
    )
  }
    
    

    
    
}

