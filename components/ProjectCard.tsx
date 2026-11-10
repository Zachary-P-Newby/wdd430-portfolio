interface ProjectCardProps {
      id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}


export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
    return (
        <article className="bg-white dark:bg-blue-100 rounded-lg shadow-md p-6 m-4 w-full max-w-lg transition-transform transform hover:scale-105 text-wrap">
            <h3 className="text-xl font-bold mb-2 dark:text-cyan-900">{title}</h3>
            <p className="text-gray-700 mb-3">{description}</p>
            <p className="text-sm text-gray-600">
            <strong>Technologies:</strong> {technologies.join(', ')}
        </p>
        {link && (
            <p className="mt-2">
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
            </p>
        )}
        </article>  
    );
}