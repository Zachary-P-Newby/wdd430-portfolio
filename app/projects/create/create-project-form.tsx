'use client';
import { useActionState } from 'react';
import { createProject, type State } from '@/app/lib/actions';

const initialState: State = { message: null, errors: {} };

export default function CreateProjectForm() {
  const [state, formAction, isPending] = useActionState(createProject, initialState);

    return (

        <div className='w-full'>
            <h1 className="text-4xl font-bold text-gray-800">Create Project</h1>
            <div className="flex flex-col items-center justify-center gap-2 w-full bg-sky-800 rounded-md p-4 max-w-1000">
                
                <form action={formAction} className="flex flex-col gap-2 w-1/2 bg-white rounded-md p-4">
                
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
                        <select id="type" name="type" required className="block w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm border rounded-md p-2">
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