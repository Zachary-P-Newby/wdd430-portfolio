import { NextRequest, NextResponse } from "next/server";
import {getProjects} from "../../../lib/projects-db"

export async function GET(request: NextRequest) {
    
    //create a URL object from the request URL and get the searchParams from it
    const {searchParams} = new URL(request.url);
    //get the type parameter from the search params
    const type = searchParams.get("type");
    
    
    if(!type){
        const projects = getProjects();
        if (!projects){
            return NextResponse.json({error: "No Projects Found"}, {status: 404})
        }
        return NextResponse.json({projects: projects}, {status: 200})
    }
    else{
        const projects = getProjects(type);
        return NextResponse.json({projects: projects}, {status: 200})
    }

}

