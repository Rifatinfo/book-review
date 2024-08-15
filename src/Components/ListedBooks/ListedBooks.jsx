import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadCart } from "../../utility/localStroage";
import ListedBook from "../ListedBook/ListedBook";
import { RiArrowDropDownLine } from "react-icons/ri";


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
            <div className="h-24 bg-slate-100 rounded-xl mt-3 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold">Books</h1>
            </div>
            <div className="h-24   mt-1 flex flex-col justify-center items-center">
                <details className="dropdown">
                    <summary className="btn m-1 bg-[#23BE0A] text-white hover:text-black">Sort By <RiArrowDropDownLine className="text-3xl text-white hover:text-black" /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <div></div>
            <h1>ListedBooks : {appliedBooks.length}</h1>
            {
                appliedBooks.map(listedBook => <ListedBook key={listedBook.bookId} listedBook={listedBook}></ListedBook>)
            }
        </div>
    );
};

export default ListedBooks;