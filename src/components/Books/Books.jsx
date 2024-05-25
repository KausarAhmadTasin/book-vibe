import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("../../../public/books.json")
      .then((res) => res.json())
      .then((books) => setBooks(books));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-bold">Books</h1>
      <ul className="grid grid-cols-3 gap-4 my-10">
        {books.map((book) => (
          <li key={book.book_id}>
            <Link to={`/${book.book_id}`}>
              {" "}
              <Book book={book} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
