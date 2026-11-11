import ProjectList from "../../../components/ProjectList";


export default async function OpenSource(){
//fetch data
    const origin = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}`: "http://localhost:3000";
    const response = await fetch(`${origin}/api/projects?type=opensource`);

  
  
  if(response.ok){
    const data = await response.json();
    const projects = data.projects;

    return(
        <main className="mx-auto px-30 py-12 bg-blue-200 w-full min-h-screen m-0">
            <h1 className="text-cyan-900">Projects Overview</h1>
            <section className="bg-sky-800 px-8 py-4 rounded-lg min-h-60">
                    <ProjectList projects={projects} />
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
