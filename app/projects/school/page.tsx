import { Suspense } from "react";
import ProjectList from "../../../components/ProjectList";
import { Project } from "@/lib/projects-db";


async function SchoolProjects(){
    const origin = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const response = await fetch(`${origin}/api/projects?type=school`);

  
  if(response.ok ){
    const data = await response.json();
    const projects:Project[] = data.projects;
    return <ProjectList projects={projects} />
  }
  else{
    return <h1 className="text-cyan-100">Projects Unavailible</h1>
  }
}


export default async function School() {
  

  return (
    <main className="mx-auto px-30 py-12 bg-blue-200 w-full min-h-screen m-0">
      <h1 className="text-cyan-900">School Projects</h1>
      <section className="bg-sky-800 px-8 py-4 rounded-lg min-h-60">
        <Suspense fallback={<h1 className="text-cyan-100">Projects Loading</h1>}>
          <SchoolProjects/>
        </Suspense>
      </section>
    </main>
  );
}
