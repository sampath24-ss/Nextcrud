type Book = {
    id: string,
    title: string,
    author: string,
    published:Date
};

let books: Book[] = [];

export const getBooks = () => books;

export const addBooks = (book: Book) => {
    books.push(book)
}

export const deleteBook = (id: string) => {
    books = books.filter((book) => {
    book.id !== id
   })
}

export const updateBook = (id: string, title: string , author: string,published: Date) => {
    const book = books.find((book) => 
        book.id === id
    )

    if(book){
        book.title = title,
        book.author = author,
        book.published = published
    }else{
        throw new Error("No Book")
    }
}

export const getById = (id: string) => {
    return books.find((book) => 
        book.id === id
    )
}