import ProjectCard from './ProjectCard';

import { Project } from '@/lib/projects-db';

export default async function ProjectList({projects}:{projects:Project[]}) {
 
      return (<section className=" flex flex-col gap-4 flex-wrap content-center flex-grow"> 
        {projects.map((project:Project)=>(
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>)
}

