import {deleteProject} from "@/app/lib/actions";
import Link from "next/link";

interface ProjectCardProps {
    id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}


export default function ProjectCard({ id, title, description, technologies, link }: ProjectCardProps) {
    return (
        <article className="bg-white dark:bg-blue-100 rounded-lg shadow-md p-6 m-4 w-full max-w-lg transition-transform transform hover:scale-105 text-wrap">
            <h3 className="text-xl font-bold mb-2 dark:text-cyan-900">{title}</h3>
            <p className="text-gray-700 mb-3">{description}</p>
            <p className="text-sm text-gray-600">
                <strong>Technologies:</strong> {technologies.join(', ')}
            </p>
            <div className="flex flex-col grow w-1/2">
            {link && (
                <div className=" bg-green-400 py-2 px-4 font-bold rounded-md mt-5 text-white hover:bg-green-500">
                <p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">View Project</a>
                </p>
                </div>
                )}
                <Link href={`/projects/${id}/edit`} className=" bg-amber-300 py-2 px-4 font-bold rounded-md mt-5 text-white hover:bg-amber-400">
                    Edit Project
                </Link>
                <form action={deleteProject.bind(null, id)} className="mt-4">
                    <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete Project
                    </button>
                </form>

            </div>
       
        </article>  
    );
}