import placeholderImage from "../../assets/404.jpg";
import { FaRegStar } from "react-icons/fa6";

const Book = ({ book }) => {
  const { tags, author, image, rating, publisher, bookName ,category} = book;
  return (
    <div>
      <div className="card bg-base-100 h-[482px] shadow-xl p-6">
        <figure className="px-10 pt-10">
          <img
            src={image || placeholderImage}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="flex item-center gap-6 p-2 mt-5">
            {
             tags.map((tag, inx) => <div key={inx}>
                # {tag}
             </div>)
            }
        </div>
        <div className="p-2 space-y-6">
            <p className="text-2xl font-bold">{bookName}</p>
            <p className="font-medium">By : {author}</p>
            <hr />
            <div className="flex justify-between items-center font-medium">
                <div>
                    {category}
                </div>
                <div className="flex items-center gap-2">
                    <p>{rating}</p>
                    <p><FaRegStar /></p>
                </div>
            </div>
        </div>
            
        </div>
    </div>
  );
};

export default Book;
