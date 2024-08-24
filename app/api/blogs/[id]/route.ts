import { deleteBook, getBooks, getById } from "@/lib/data";
import { error } from "console";
import { useParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    const id = req.url.split("blogs/")[1];
    const books = getById(id);
    console.log(id)
    if(!books){
        return NextResponse.json({
           error
        },{
            status: 400
        })
    }
    
    return NextResponse.json({
        msg: "Hello",
        books
    })
}


export const DELETE = async(req: Response) =>{
    const id = req.url.split("blogs/")[1];
    const deleteb = deleteBook(id);

    return Response.json({
        msg: "Book is  Delete"
    })
}

export const PUT = async(req: Response) => {
    const id = req.url.split("blogs/")[1];
    const {title,author,published} = await req.json()
    try {
        return NextResponse.json({
            msg: "updated",
            title: title,
            author: author,
            published: published
        })
    } catch (error) {
        return NextResponse.json({
            msg: error
        })
    }
}