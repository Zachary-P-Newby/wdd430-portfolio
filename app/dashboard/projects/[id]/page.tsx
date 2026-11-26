import NavLinks from "@/app/components/NavLinks";
import ProjectCard from "@/app/components/ProjectCard";
import { fetchProjectById } from "@/app/lib/data";
import { projectMetaDataGenerator } from "@/app/lib/metadata-generator";


export async function generateMetadata(props: { params: Promise<{ id: string }> }){
  const params = await props.params;
  
  return projectMetaDataGenerator(params.id);
}
export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = parseInt(params.id);
  const project = await fetchProjectById(id);


  if (project) {
    
    
    return (
      <main className="mx-auto px-30 py-12 bg-blue-200 w-full min-h-screen m-0 flex flex-col items-center justify-center gap-2">
        <ProjectCard id={project.id} title={project.title} description={project.description} type={project.type} technologies={project.technologies} link={project.link}></ProjectCard>
        
        <NavLinks page="/projects" displayName="Back"></NavLinks>
        </main>
    );
  }

  return (
    <main>
        <h1>Project Not found</h1>
        <NavLinks page="/projects" displayName="Back"></NavLinks>
    </main>
  );
}


