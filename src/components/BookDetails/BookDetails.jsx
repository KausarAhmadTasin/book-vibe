import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInd = parseInt(id);
  const book = books.find((book) => book.book_id === idInd);
  console.log(book);
  return (
    <div className="container mx-auto my-10">
      <div className="flex gap-x-12 work-sans-font items-center">
        <div>
          <img
            className="lg:w-[35.8125rem] rounded-3xl lg:h-[38.4375rem]"
            src={book.image}
            alt=""
          />
        </div>
        <div className="max-w-[34.3125rem]">
          <h2 className="font-bold text-[2.5rem] playfair-font">
            {book.book_name}
          </h2>
          <p className="text-base my-4 font-medium work-sans-font">
            By: {book.author}
          </p>
          <div className="border my-3"></div>
          <p>{book.category}</p>
          <div className="border my-3"></div>
          <p className="my-6">
            <span className="font-bold">Review: </span>
            {book.review}
          </p>
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
          <div className="border my-3"></div>
          <div className="space-y-3 mb-8">
            <p className="text-[#131313B2]">
              Number of Pages:
              <span className="ml-2 font-bold">{book.total_pages}</span>
            </p>
            <p className="text-[#131313B2]">
              Publisher:
              <span className="ml-2 font-bold">{book.publisher}</span>
            </p>
            <p className="text-[#131313B2]">
              Year of Publishing:
              <span className="ml-2 font-bold">{book.year_of_publication}</span>
            </p>
            <p className="text-[#131313B2]">
              Rating:
              <span className="ml-2 font-bold">{book.ratings}</span>
            </p>
          </div>
          <div className="flex gap-x-4">
            <button className="btn border ">Read</button>
            <button className="btn text-white bg-[#50B1C9]">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
