import { Console } from 'console';
import ProjectCard from './ProjectCard';

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

export default async function ProjectList({type}: {type?:string}) {
  
  const origin = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}`: "http://localhost:3000";

  let response;

  if(type){
    response = await fetch(`${origin}/api/projects?type=${type}`);
  }
  else{
    response = await fetch(`${origin}/api/projects`);
  }
  
  
  
  if(response.ok){
    const data = await response.json();
    
    return (
      <section className=" flex flex-col gap-4 flex-wrap content-center flex-grow"> 
        {data.projects.map((project:Project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
        );
    }
  else{
    return (<section className="flex flex-col gap-4 flex-wrap content-center flex-grow"> 
        <h1>Projects Unavailible</h1>
      </section>)
  }

}