'use server';

import {z} from "zod";
import { sql } from '@vercel/postgres';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { auth } from '@/auth';


async function requireOwnerSession() {
  const session = await auth();
  if (!session?.user) throw new Error('Not authenticated');
  return session;
}


const currentYear = new Date().getFullYear();

const  CreateProjectSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters long').max(255, 'Title cannot be greater than 255 characters long'),
    description: z.string().max(1000, 'Description cannot be greater than 1000 characters long'),
    technologies: z.string().min(2, 'Technologies must be at least 2 characters long'),
    type: z.enum(["opensource","school"]),
    link: z.string().max(500, 'Link cannot be greater than 500 characters long'),
    yearCompleted: z.coerce
    .number()
    .int('Year Must be whole number')
    .gte(2000, 'Year must be at least 2000')
    .lte(currentYear, `Year cannot be greater than ${currentYear}`)
})

const  UpdateProjectSchema = z.object({
    id: z.string(),
    title: z.string().min(3, 'Title must be at least 3 characters long').max(255, 'Title cannot be greater than 255 characters long'),
    description: z.string().max(1000, 'Description cannot be greater than 1000 characters long'),
    technologies: z.string().min(2, 'Technologies must be at least 2 characters long'),
    type: z.enum(["opensource","school"]),
    link: z.string().max(500, 'Link cannot be greater than 500 characters long'),
    yearCompleted: z.coerce
    .number()
    .int('Year Must be whole number')
    .gte(2000, 'Year must be at least 2000')
    .lte(currentYear, `Year cannot be greater than ${currentYear}`)
})


export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    technologies?: string[];
    link?: string[];
    yearCompleted?: string[];
  };
  message?: string | null;
};


export async function createProject(prevState: State, formData: FormData): Promise<State>{
  
  await requireOwnerSession();

  const validatedFields = CreateProjectSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    technologies: formData.get('technologies'),
    type: formData.get("type"),
    link: formData.get("link"),
    yearCompleted: formData.get('yearCompleted'),
  });

     if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to create project.',
    };
  }


    const {title, description, technologies, type, link, yearCompleted} = validatedFields.data;

    const technologyList = technologies
  .split(",")
  .map((item) => item.trim())
  .filter(Boolean);

    await sql`
    INSERT INTO projects (title, description, technologies, type, link, yearCompleted)
    VALUES (${title}, ${description},  ARRAY(SELECT jsonb_array_elements_text(${JSON.stringify(technologyList)}::jsonb)), ${type}, ${link}, ${yearCompleted})
    `;

    revalidatePath('/projects');
    redirect('/projects');
}

export async function updateProject(prevState: State, formData: FormData): Promise<State>{
    
  await requireOwnerSession();
  
  const validatedFields = UpdateProjectSchema.safeParse({
    id: formData.get('id'),
    title: formData.get('title'),
    description: formData.get('description'),
    technologies: formData.get('technologies'),
    type: formData.get("type"),
    link: formData.get("link"),
    yearCompleted: formData.get('yearCompleted'),
  });

     if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to update project.',
    };
  }


    const {id, title, description, technologies, type, link, yearCompleted} = validatedFields.data;

    const technologyList = technologies
  .split(",")
  .map((item) => item.trim())
  .filter(Boolean);

    await sql`
    UPDATE projects
    SET title = ${title}, description = ${description}, technologies = ARRAY(SELECT jsonb_array_elements_text(${JSON.stringify(technologyList)}::jsonb)), type = ${type}, link = ${link}, yearCompleted = ${yearCompleted}
    WHERE id = ${parseInt(id)}
    `;

    revalidatePath('/projects');
    redirect('/projects');
}


export async function deleteProject(id: number){
    
  await requireOwnerSession();

  await sql`
    DELETE FROM projects WHERE id = ${id}
    `;

    revalidatePath('/projects');
    redirect('/projects');
}


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid email or password.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error; // re-throw so Next.js handles redirects correctly
  }
}


