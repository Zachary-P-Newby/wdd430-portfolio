import { Suspense } from "react";
import ProjectList from "../../../components/ProjectList";


export default function School(){

    return(

    <main className="mx-auto px-30 py-12 bg-blue-200 w-full min-h-screen m-0">
                <h1>School Projects</h1>
                <section className="bg-sky-800 px-8 py-4 rounded-lg min-h-60">
                    <Suspense fallback={<h1>Projects Loading</h1>}>
                        <ProjectList type="school"/>
                    </Suspense>
                    
                </section>
            </main>
    )

}
