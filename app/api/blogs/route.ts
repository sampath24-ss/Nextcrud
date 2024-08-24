import { addBooks, getBooks } from "@/lib/data"
import { NextRequest, NextResponse } from "next/server"


export async function GET(req: NextRequest){
    try {
        const Books = getBooks()
        return NextResponse.json({message: "Done",
            Books: Books
        },{
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            msg: error
        },{
            status: 500,
        })
    }
}


export async function POST(req: NextRequest){
    const {title,author,published} = await req.json();
    try {
        const books = {title,author,published,id: Date.now().toString()};
        addBooks(books)
        return NextResponse.json({
            Message: 'Done updating books',
            books
        },{
            status: 200
        })
    } catch (error) {
        NextResponse.json({
            msg: error
        },{
            status: 200
        })
    }
    
};