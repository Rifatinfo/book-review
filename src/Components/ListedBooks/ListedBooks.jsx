import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadCart } from "../../utility/localStroage";
import ListedBook from "../ListedBook/ListedBook";

const ListedBooks = () => {
    const bookList = useLoaderData();

    const [appliedBooks, setAppliedBook] = useState([]);

    useEffect(() => {
        const storedBookId = getStoredReadCart();
        if (bookList.length > 0) {
            const ListedBook = bookList.filter(book => storedBookId.includes(book.bookId));
            //    const ListedBook = bookList.filter(book => storedBookId === (book.bookId));
            //    console.log(bookList,ListedBook,storedBookId);
            setAppliedBook(ListedBook);
        }
    }, [])
    return (
        <div>
            <h1>ListedBooks : {appliedBooks.length}</h1>
            {
                appliedBooks.map(listedBook => <ListedBook key={listedBook.bookId} listedBook={listedBook}></ListedBook>)
            }
        </div>
    );
};

export default ListedBooks;