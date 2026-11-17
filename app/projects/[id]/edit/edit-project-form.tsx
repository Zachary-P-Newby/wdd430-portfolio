// app/projects/[id]/edit/page.tsx
'use client';
import { Project } from '@/app/lib/projects-db';
import { useActionState } from 'react';
import { updateProject, type State } from '@/app/lib/actions';


const initialState: State = { message: null, errors: {} };


export default function EditProjectForm({ project }: { project: Project }) {



    const [state, formAction, isPending] = useActionState(updateProject, initialState);

  // Fetch project by id and render the edit form...
  return (
    <div className='w-full'>
        <h1 className="text-4xl font-bold text-gray-800">Update Project</h1>
        <div className="flex flex-col items-center justify-center gap-2 w-full bg-sky-800 rounded-md p-4 max-w-screen">

            <form action={formAction} className="flex flex-col gap-2 w-1/2 bg-white rounded-md p-4">
                    <input name="id" type='hidden' defaultValue={project.id}></input>

                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input 
                            id="title" 
                            name="title" 
                            required 
                            type="text" 
                            className="block w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border rounded-md p-2"
                            aria-describedby='title-error'
                            defaultValue={project.title}
                        ></input>
                        <div id="title-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.title?.map((error) => (
                                <p key={error} className="mt-1 text-sm text-red-600">
                                {error}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea 
                        id="description" 
                        name="description" 
                        required
                        rows={4} 
                        className="block w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border rounded-md p-2"
                        aria-describedby="description-error"
                        defaultValue={project.description}
                        />
                        <div id="description-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.description?.map((error) => (
                                <p key={error} className="mt-1 text-sm text-red-600">
                                {error}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">
                            Technologies (comma-separated)
                        </label>
                        <input 
                        id="technologies" 
                        name="technologies" 
                        type="text" 
                        className="block w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border rounded-md p-2"
                        aria-describedby="technologies-error"
                        required
                        defaultValue={project.technologies}
                        />
                        <div id="technologies-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.technologies?.map((error) => (
                            <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                            </p>
                        ))}
                        </div>
                    </div>

                    
                    <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                            Type
                        </label>
                        <select 
                        id="type" 
                        name="type" 
                        required 
                        className="block w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border rounded-md p-2"
                        defaultValue={project.type}
                        >
                            <option value="opensource">Open Source</option>
                            <option value="school">School</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                            Link
                        </label>
                        <input 
                        id="link" 
                        name="link" 
                        type="url" 
                        className="block w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border rounded-md p-2"
                        aria-describedby='link-error'
                        defaultValue={project.link}
                        ></input>
                        <div id="link-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.link?.map((error) => (
                            <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                            </p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="yearCompleted" className="mb-2 block text-sm font-medium text-slate-700">
                        Year Completed
                        </label>
                        <input
                        id="yearCompleted"
                        name="yearCompleted"
                        type="number"
                        min="2000"
                        max="2099"
                        className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
                        aria-describedby="yearCompleted-error"
                        required
                        defaultValue={project.yearCompleted}
                        />
                        <div id="yearCompleted-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.yearCompleted?.map((error) => (
                            <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                            </p>
                        ))}
                        </div>
                    </div>

                    {state.message ? <p className="text-sm text-red-600">{state.message}</p> : null}

                    <button 
                    type="submit"
                    disabled={isPending}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Save Project
                    </button>
                </form>
            </div>
        </div>
    )
}