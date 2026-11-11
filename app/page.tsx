//import Image from "next/image";
import ProjectListPlaceholder from "@/components/ProjectListPlaceholder";
import ProjectList from "../components/ProjectList";
import { Suspense } from "react";

import { Project } from "@/lib/projects-db";

const projects: Project[] = [
  {
    id: 1,
    title: "Crud Busters",
    description: "Top down arcade shooter based on Asteroids by Atari Inc, made in Godot for PC",
    type: "opensource",
    technologies: ["Godot","GDScript","PC"],
    link: "https://github.com/Zachary-P-Newby/CrudBusters"
  },
  {
    id: 2,
    title: "Travel Coordinator",
    description: "Webpage that helps users coordinate taveling by providing useful travel information such as weather, flights, and European hotels",
    type: "school",
    technologies: ["HTML","JavaScript","CSS"],
    link: "https://github.com/Zachary-P-Newby/TravelCoordinatorWDD330"
  },
  {
    id: 3,
    title: "CSE340 Service Projects Webpage",
    description: "Service Project webpage that helps users find service projects to volunteer for and provides information about the projects.",
    type: "school",
    technologies: ["HTML","JavaScript","PostgreSQL","Node.js","Express"],
    link: "https://github.com/Zachary-P-Newby/CSE340"
  }
]

export default async function Home() { 
    
    return (
    <main className="mx-auto px-30 py-12 bg-blue-200 w-full min-h-screen m-0">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&#39;m a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <div className="bg-sky-800 p-4 rounded-lg shadow-md">
        <ProjectList projects={projects}/>
      </div>
      
      
    </main>);
    };