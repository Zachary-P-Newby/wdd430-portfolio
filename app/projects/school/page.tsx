import { Suspense } from "react";
import ProjectList from "../../components/ProjectList";



async function Request(){
    const response = await fetch("http://localhost:3000/api/projects?type=school");
    if(!response.ok){
        return <p>Failed to Load Projects</p>
    }
    const data = await response.json();
    return <pre><ProjectList projects={data.projects}/></pre>
    
}


    



export default function School(){

    return(

    <main className="mx-auto px-30 py-12 bg-blue-200 w-full min-h-screen m-0">
                <h1>School Projects</h1>
                <section className="bg-sky-800 px-8 py-4 rounded-lg min-h-60">
                    <Suspense fallback={<p>Loading users…</p>}>
                        <Request/>
                    </Suspense>
                    
                </section>
            </main>
    )

}
