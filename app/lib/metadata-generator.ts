import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchProjectById } from '@/app/lib/data';


export async function projectMetaDataGenerator(id:string): Promise<Metadata> {
  const project = await fetchProjectById(parseInt(id));

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested portfolio project could not be found.',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      //images: project.imageUrl ? [project.imageUrl] : [],
    },
  };
}