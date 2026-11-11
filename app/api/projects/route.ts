import { NextRequest, NextResponse } from "next/server";
import {getProjects, fetchFilteredProjects, fetchProjectsPages} from "../../../lib/projects-db"

export async function GET(request: NextRequest) {
    
    //create a URL object from the request URL and get the searchParams from it
    const searchParams = request.nextUrl.searchParams;
    //get the type parameter from the search params
    const query = searchParams.get("query");
    const page = searchParams.get("page");
    const type = searchParams.get("type");
    
    let projects;
    let pages;

    try{
        if(query && page){
            console.log("query and page");
            projects = await fetchFilteredProjects(query, parseInt(page));
            pages = await fetchProjectsPages(query);
            
            return NextResponse.json({projects: projects, pages: pages},{status: 200})
        }
        else if(type){
            console.log("type");
            projects = await getProjects(type);
            return NextResponse.json({projects: projects}, {status: 200})
        }else{
            console.log("none");
            projects = await getProjects();
            return NextResponse.json({projects: projects}, {status: 200})
        }
    }catch(error){
        return NextResponse.json({projects: null, error: error}, {status: 500})
    }

}
