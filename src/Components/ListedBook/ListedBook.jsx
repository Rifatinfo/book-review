import placeholderImage from "../../assets/404.jpg";
import { CiLocationOn } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

const ListedBook = ({ listedBook }) => {
  console.log(listedBook);
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = listedBook;
  return (
    <div className="flex item-center gap-4 border mb-5 mt-3 p-3 rounded-lg">
      {/* image */}
      <div className="flex items-center p-3 bg-slate-100 rounded-lg">
        <figure className="px-10 pt-10">
          <img
            src={image || placeholderImage}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
      </div>
      {/* cart Details */}
      <div className="p-3 space-y-3">
        <p className="text-4xl font-bold">{bookName}</p>
        <p className="text-xl font-semibold">By : {author}</p>
        {/* tag */}
        <div className="flex item gap-6">
          <div className="flex item-center gap-6  font-medium">
            tags :
            {tags.map((tag, inx) => (
              <div key={inx}>
                <span className="text-[#23BE0A]"> # {tag}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <p>
              <CiLocationOn />
            </p>
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>
        {/* Publisher, Pages */}
        <div className="flex gap-6">
            <div className="flex items-center gap-3">
              <p>
                <MdManageAccounts />
              </p>
              <p>Publisher : {publisher}</p>
            </div>
            <div className="flex items-center gap-3">
              <p><MdOutlineContactPage /></p>
              <p> Pages : {totalPages}</p>
            </div>
        </div>
        <hr />
        <div>
        <Link to="/listed-book"><button className="btn rounded-3xl bg-[#328EFF]  text-white" >Category: {category}</button></Link>
        <Link to="/listed-book"><button className="btn rounded-3xl bg-[#FFAC33] text-white ">Rating: {rating}</button></Link>
        <Link to="/listed-book"><button className="btn rounded-3xl bg-[#23BE0A] text-white" >View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
