
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

export { getStoredReadCart, saveReadCart }
