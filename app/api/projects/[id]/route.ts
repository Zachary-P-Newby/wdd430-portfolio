import { NextResponse } from "next/server";
import {getProjectById} from "../../../../lib/projects-db"

export async function GET(
    _request: Request,
    { params }: {  params: Promise<{ id: string }>  }
) {
    const parameters = await params;
    
    const id = Number(parameters.id);
    console.log(id);
    if (Number.isNaN(id)){
        return NextResponse.json({error: 'Invalid id'}, {status: 400});
    }
    const project = getProjectById(id);

    if (!project){
        return NextResponse.json({error: "Not Found"}, {status: 404})
    }

    return NextResponse.json({project: project}, {status: 200})

}