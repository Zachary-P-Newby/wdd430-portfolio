//import Image from "next/image";
import ProjectList from "./components/ProjectList";

const projects = [
  {
    title: 'Crud Busters',
    description: 'Top down arcade shooter based on Asteroids by Atari Inc, made in Godot for PC',
    technologies: ['Godot', 'GDScript', 'PC'],
    link: 'https://github.com/Zachary-P-Newby/CrudBusters'
  },
  {
    title: 'Travel Coordinator',
    description: 'Webpage that helps users coordinate taveling by providing useful travel information such as weather, flights, and European hotels',
    technologies: ['HTML', 'JavaScript', 'CSS'],
    link: 'https://github.com/Zachary-P-Newby/TravelCoordinatorWDD330'
  },
  {
    title: 'CSE340 Service Projects Webpage',
    description: 'Service Project webpage that helps users find service projects to volunteer for and provides information about the projects.',
    technologies: ['HTML', 'JavaScript', 'PostgreSQL', 'Node.js', 'Express'],
    link: 'https://github.com/Zachary-P-Newby/CSE340'
  }
];

export default function Home() { 
  return (
    <main className="mx-auto px-30 py-12 bg-blue-200 w-full min-h-screen m-0">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&#39;m a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}