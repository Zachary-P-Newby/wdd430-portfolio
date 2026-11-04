// lib/projects-db.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
   {
    id:1,
    title: 'Crud Busters',
    description: 'Top down arcade shooter based on Asteroids by Atari Inc, made in Godot for PC',
    type: 'opensource',
    technologies: ['Godot', 'GDScript', 'PC'],
    link: 'https://github.com/Zachary-P-Newby/CrudBusters'
  },
  {
    id:2,
    title: 'Travel Coordinator',
    description: 'Webpage that helps users coordinate taveling by providing useful travel information such as weather, flights, and European hotels',
    type: 'school',
    technologies: ['HTML', 'JavaScript', 'CSS'],
    link: 'https://github.com/Zachary-P-Newby/TravelCoordinatorWDD330'
  },
  {
    id:3,
    title: 'CSE340 Service Projects Webpage',
    description: 'Service Project webpage that helps users find service projects to volunteer for and provides information about the projects.',
    type: 'school',
    technologies: ['HTML', 'JavaScript', 'PostgreSQL', 'Node.js', 'Express'],
    link: 'https://github.com/Zachary-P-Newby/CSE340'
  }
];


export function getProjects(type?: string | null): Project[] {
  if (type) return projects.filter(p => p.type === type);
  return projects;
}

export function getProjectById(id: number): Project | null {
  return projects.find(p => p.id === id) ?? null;
}