import { Link, useLoaderData } from "react-router-dom";
import Books from "../Books/Books";

const Banner = () => {
  const books = useLoaderData();
  return (
    <div className="md:container mx-3 md:mx-auto my-10 ">
      <div className="hero md:h-[34.625rem] bg-base-200 rounded-3xl md:px-10 lg:px-20 ">
        <div className="hero-content flex-col md:flex-row-reverse">
          <img
            src={books[0].image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="md:text-5xl text-3xl font-bold leading-tight">
              Books to freshen up your bookshelf
            </h1>
            <p className="py-6">
              Welcome to BookHaven, your ultimate destination for honest
              reviews, insightful recommendations, and the latest in literary
              news.
            </p>
            <Link to="/listedBooks">
              <button className="btn bg-[#23BE0A] text-white px-7">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Books books={books} />
    </div>
  );
};

export default Banner;
