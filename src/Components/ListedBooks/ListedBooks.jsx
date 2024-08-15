import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredReadCart } from "../../utility/localStroage";
import { RiArrowDropDownLine } from "react-icons/ri";
import ListedBook from "../ListedBook/ListedBook";
import WishlistBooks from "../WhishList/WishlistBooks";



const ListedBooks = () => {
    const bookList = useLoaderData();

    const [appliedBooks, setAppliedBook] = useState([]);
    const [tabIndex,setTabIndex] = useState(0);
    const [wishListBooks, setWishListBooks] = useState([]);

    useEffect(() => {
        const storedBookId = getStoredReadCart();
        if (bookList.length > 0) {
            const ListedBook = bookList.filter(book => storedBookId.includes(book.bookId));
            //    const ListedBook = bookList.filter(book => storedBookId === (book.bookId));
            //    console.log(bookList,ListedBook,storedBookId);
            setAppliedBook(ListedBook);
            setWishListBooks(ListedBook);
        }
    }, [bookList])
    return (
        <div>
            <div className="h-24 bg-slate-100 rounded-xl mt-3 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold">Books</h1>
            </div>
            <div className="h-24   mt-1 flex flex-col justify-center items-center mb-20">
                <details className="dropdown">
                    <summary className="btn m-1 bg-[#23BE0A] text-white hover:text-black">Sort By <RiArrowDropDownLine className="text-3xl text-white hover:text-black" /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <hr />
            {/* tabs */}
            <div className="flex items-start -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap mt-8">
                <Link onClick={() => setTabIndex(0)} rel="noopener noreferrer" to="" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link onClick={() => setTabIndex(1)} rel="noopener noreferrer" to={`wishList`} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>
   
              {/* Render content based on tabIndex */}
              {tabIndex === 0 ? (
                <>
                    <h1>Read Books : {appliedBooks.length}</h1>
                    {appliedBooks.map(listedBook => (
                        <ListedBook key={listedBook.bookId} listedBook={listedBook} />
                    ))}
                </>
            ) : (
                <>
                    <h1>Wishlist Books : {wishListBooks.length}</h1>
                     {wishListBooks.map(listedBook => (
                        <WishlistBooks key={listedBook.bookId} listedBook={listedBook}></WishlistBooks>
                    ))}
                </>
            )}
        </div>
    );
};

export default ListedBooks;