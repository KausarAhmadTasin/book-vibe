import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredBookList } from "../utils/localStorage";
import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import { CiFileOn } from "react-icons/ci";

const ListedBooks = () => {
  const books = useLoaderData();
  const [listedBooks, setListedBooks] = useState([]);

  useEffect(() => {
    const storedBooks = getStoredBookList();
    if (storedBooks.length > 0) {
      const listedBook = books.filter((book) =>
        storedBooks.includes(book.book_id)
      );
      setListedBooks(listedBook);
      console.log(books, storedBooks, listedBook);
    }
  }, [books]);

  return (
    <div className="container mx-auto my-10">
      <h1 className="bg-[#1313130D] h-24 font-bold text-2xl flex items-center justify-center rounded-xl text-center work-sans-font">
        Books
      </h1>
      <ul>
        {listedBooks.map((book) => (
          <li key={book.book_id} className="p-6 border rounded-2xl my-6">
            {" "}
            <div className="flex work-sans-font gap-x-6">
              <div className="p-x-12">
                <img className="lg:h-64" src={book.image} alt="" />
              </div>
              <div className="p-x-2 flex-grow">
                <h3 className="font-bold text-2xl playfair-font">
                  {book.book_name}
                </h3>
                <p className="font-medium text-[#131313CC]">
                  By: {book.author}
                </p>
                <div className="flex items-center gap-x-4">
                  <ul className="flex items-center gap-x-3">
                    <span className="font-bold">Tag</span>
                    {book.tags.map((tag, index) => (
                      <li
                        className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-1 my-3 rounded-3xl work-sans-font font-medium"
                        key={index}
                      >
                        {" "}
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <p className="flex items-center gap-x-2 text-[#131313CC]">
                    <IoLocationOutline />
                    {book.year_of_publication}
                  </p>
                </div>

                {/* Publisher Line */}
                <div className="flex items-center text-[#13131399] gap-x-4 my-4">
                  <p className="flex items-center gap-x-2">
                    <IoPeopleOutline className="text-2xl" />
                    {book.publisher}
                  </p>
                  <p className="flex items-center gap-x-2">
                    <CiFileOn className="text-2xl" />
                    Page {book.total_pages}
                  </p>
                </div>

                {/* Line */}
                <div className="border my-3"></div>

                {/* Info */}
                <div>
                  <ul className="flex gap-x-4 my-6">
                    <li className="px-5 py-3 rounded-[30px] bg-[#328EFF26] text-[#328EFF]">
                      Category: {book.category}
                    </li>
                    <li className="bg-[#FFAC3326] text-[#FFAC33] px-5 py-3 rounded-[30px]">
                      Rating: {book.ratings}
                    </li>
                    <Link to={`/${book.book_id}`}>
                      {" "}
                      <li className="bg-[#23BE0A] text-white px-5 py-3 rounded-[30px]">
                        View Details
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListedBooks;
