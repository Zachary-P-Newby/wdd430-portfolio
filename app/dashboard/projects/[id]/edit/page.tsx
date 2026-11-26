
import { Suspense } from "react"
import EditProjectForm from "./edit-project-form"
import { fetchProjectById } from "@/app/lib/data";
import NotFound from "@/app/not-found";

type Props = {
  params: Promise<{ id: string }>;
};

async function FormContainer({ params }: Props){

    const id  = parseInt((await params).id);
    const project = await fetchProjectById(id);

    if(project){
        


        return(
            <EditProjectForm project={project}/>
        )
    }else{
        NotFound();
    }
    
}

export default async function EditProjectPage({ params }: Props) {
    

    

    return (

        <main className="mx-auto px-30 py-12 bg-blue-200 w-full min-h-screen m-0 flex flex-col items-center justify-center gap-2">
            <Suspense fallback={
                <div>
            <h1 className="text-4xl font-bold text-gray-800">Update Project</h1>
                <div className="flex flex-col items-center justify-center gap-2 w-full bg-sky-800 rounded-md p-4 max-w-screen">
                    <h2 className="text-3xl font-bold text-gray-800">Loading..</h2>
                </div>
            </div>
            }>
                <FormContainer params={params}></FormContainer>

            </Suspense>
            
        </main>


    )
    
}