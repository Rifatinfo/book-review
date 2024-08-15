import { useLoaderData, useParams } from "react-router-dom";
import placeholderImage from "../../assets/404.jpg";

const BookDetail = () => {
  const bookList = useLoaderData();
  const { bookId } = useParams();
  const book = bookList.find((book) => book.bookId === parseInt(bookId));
  return (
    <div className="min-h-[calc(100vh-200px)] mt-5">
      <div className="lg:flex lg:gap-3 grid grid-cols-1">
        <div className="lg:w-2/4 lg:flex items-center justify-center grid grid-cols-1 lg:p-6 lg:min-h-[calc(100vh-200px)] bg-gray-100 lg:rounded-xl">
          <figure className="px-10 pt-10">
            <img
              src={book.image || placeholderImage}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
        </div>
        <div className="w-2/4 p-6 min-h-[calc(100vh-200px)] space-y-8">
          <p className="text-4xl font-bold">{book.bookName}</p>
          <p className="text-xl font-semibold">By : {book.author}</p>
          <hr />
          <p className="text-xl font-semibold">{book.category}</p>
          <hr />
          <p>Review : {book.review}</p>
          <div className="flex item-center gap-6  font-medium">
            tags :
            {book.tags.map((tag, inx) => (
              <div key={inx}>
                <span className="text-[#23BE0A]"> # {tag}</span>
              </div>
            ))}
          </div>
          <hr />
          <div>
            <p>Number of Pages : {book.totalPages}</p>
            <p>Publisher : {book.publisher}</p>
            <p>Rating : {book.rating}</p>
            <p>Year of Publishing: {book.yearOfPublishing}</p>
          </div>
          <div className="flex gap-4">
            <a className="btn bg-[#23BE0A] text-white">Read</a>
            <a className="btn bg-[#59C6D2] text-white">Wishlist</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
