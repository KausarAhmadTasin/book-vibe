import { FaRegStar } from "react-icons/fa6";

const Book = ({ book }) => {
  const { tags, book_name, author, category, ratings, image } = book;

  return (
    <div className="border rounded-2xl p-6">
      <img className="rounded-2xl lg:h-60 mx-auto" src={image} alt="" />
      <div>
        <ul className="flex gap-x-3">
          {tags.map((tag, index) => (
            <li
              className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-1 my-3 rounded-3xl work-sans-font font-medium"
              key={index}
            >
              {" "}
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <h2 className="font-bold text-2xl my-4">{book_name}</h2>
      <p className="text-base font-medium work-sans-font">By: {author}</p>
      <div className="border my-3 border-dashed "></div>
      <div className="flex work-sans-font items-center justify-between">
        <p>{category}</p>
        <div className="flex items-center gap-2">
          <p>{ratings}</p>
          <FaRegStar />
        </div>
      </div>
    </div>
  );
};

export default Book;
