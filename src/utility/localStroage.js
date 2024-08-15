// import toast from "react-hot-toast";
const getStoredReadCart = () => {
    const storeReadCart = localStorage.getItem('read-cart');
    if (storeReadCart) {
        return JSON.parse(storeReadCart);
    }
    return [];
}

const saveReadCart = bookId => {
    const storeReadCarts = getStoredReadCart();
    const exists = storeReadCarts.find(readId => readId === (bookId));
    if (exists) {
        return false; // Book is already bookmarked, returning false to indicate failure
    } else {
        storeReadCarts.push(bookId);
        localStorage.setItem('read-cart', JSON.stringify(storeReadCarts));
        return true; // Book was successfully added, returning true to indicate success
    }
}


const getBooks = () => {
    const storeBook = localStorage.getItem('books');
    if (storeBook) {
        return JSON.parse(storeBook); // Return the parsed array of books
    }
    return []; // Return an empty array if no books are stored
};

// save
const saveBook = bookId => {
    const storeBooks = getBooks();
    const isExist = storeBooks.find(b => b === bookId);
    if (isExist) {
        return false;
    } else {
        storeBooks.push(bookId); // Add the new bookId to the array
        localStorage.setItem('books', JSON.stringify(storeBooks)); // Save the updated array to localStorage
        return true;
    }
};

// delete
// export const deleteBook = bookId =>{
// let books = getBooks();
// const remaining = books.filter(b => b.bookId !== bookId);
// localStorage.setItem('books',JSON.stringify(remaining));
// toast.success('Remove From WishList');
// }

export { getStoredReadCart, saveReadCart , getBooks, saveBook}

