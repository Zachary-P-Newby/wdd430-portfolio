
import { Project } from "@/app/lib/data";
import ProjectList from "../components/ProjectList";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Source',
};
const projects: Project[] = [
  {
    id: 1,
    title: "Crud Busters",
    description: "Top down arcade shooter based on Asteroids by Atari Inc, made in Godot for PC",
    type: "opensource",
    technologies: ["Godot","GDScript","PC"],
    yearCompleted: 2023,
    link: "https://github.com/Zachary-P-Newby/CrudBusters"
  },
  {
    id: 2,
    title: "Travel Coordinator",
    description: "Webpage that helps users coordinate taveling by providing useful travel information such as weather, flights, and European hotels",
    type: "school",
    technologies: ["HTML","JavaScript","CSS"],
    yearCompleted: 2026,
    link: "https://github.com/Zachary-P-Newby/TravelCoordinatorWDD330"
  },
  {
    id: 3,
    title: "CSE340 Service Projects Webpage",
    description: "Service Project webpage that helps users find service projects to volunteer for and provides information about the projects.",
    type: "school",
    technologies: ["HTML","JavaScript","PostgreSQL","Node.js","Express"],
    yearCompleted: 2026,
    link: "https://github.com/Zachary-P-Newby/CSE340"
  }
]


export default async function DashboardPage() {
  
  

  return (
      <main className="mx-auto px-30 py-12 bg-blue-200 w-full min-h-300 max-h-[calc(100vh-2rem)] m-0">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Dashboard</h1>
        </section>
        <div className="bg-sky-800 p-4 rounded-lg shadow-md">
          <section className="bg-white p-4 rounded-lg shadow-md">
            <ProjectList projects={projects}/>
          </section>
        </div>
        
        
      </main>);
}