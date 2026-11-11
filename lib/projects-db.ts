// lib/projects-db.ts
import { sql } from '@vercel/postgres';

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

const ITEMS_PER_PAGE = 2;


export async function getProjects(type?: string | null): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
    return rows;
  }
  const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
  return rows;
}

export async function fetchProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;
  return rows[0] ?? null;
}



export async function fetchFilteredProjects(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const search = `%${query}%`;
  console.log(`
    SELECT *
    FROM projects
    WHERE title ILIKE ${search}
       OR description ILIKE ${search}
       OR technologies && ARRAY[${query}]::text[]
    ORDER BY id
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${offset}
  `);

  const result = await sql`
    SELECT *
    FROM projects
    WHERE title ILIKE ${search}
       OR description ILIKE ${search}
       OR technologies && ARRAY[${query}]::text[]
    ORDER BY id
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${offset}
  `;

  return result.rows;
}

export async function fetchProjectsPages(query: string) {
  const search = `%${query}%`;

  const result = await sql`
    SELECT COUNT(*) AS count
    FROM projects
    WHERE title ILIKE ${search}
       OR description ILIKE ${search}
  `;

  const count = Number(result.rows[0]?.count ?? 0);
  return Math.ceil(count / ITEMS_PER_PAGE);
}


