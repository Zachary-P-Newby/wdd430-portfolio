//import Image from "next/image";
import ProjectList from "../components/ProjectList";
import { Suspense } from "react";

export default function Home() { 

    return (
    <main className="mx-auto px-30 py-12 bg-blue-200 w-full min-h-screen m-0">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&#39;m a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <div className="bg-sky-800 p-4 rounded-lg shadow-md">
        <Suspense fallback={<h1>Projects Loading</h1>}>
        <ProjectList />
      </Suspense>
      </div>
      
      
    </main>);
    };