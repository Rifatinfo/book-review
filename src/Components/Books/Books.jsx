import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
    const bookList = useLoaderData();
    // console.log(bookList);
    return (
        <div>
            <div className="mt-4">
                <h1 className="text-4xl font-semibold text-center">Books</h1>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 mt-3">
                {
                    bookList.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;