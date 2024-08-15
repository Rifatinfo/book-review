
const ListedBook = ({listedBook}) => {
    const {bookId} = listedBook;
    return (
        <div>
            <h1>{bookId}</h1>
        </div>
    );
};

export default ListedBook;