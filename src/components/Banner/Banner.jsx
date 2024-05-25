import Books from "../Books/Books";

const Banner = () => {
  return (
    <div className="md:container mx-3 md:mx-auto my-10 ">
      <div className="hero md:h-[34.625rem] bg-base-200 rounded-3xl md:px-10 lg:px-20 ">
        <div className="hero-content flex-col md:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
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
            <button className="btn bg-[#23BE0A] text-white px-7">
              View The List
            </button>
          </div>
        </div>
      </div>
      <Books />
    </div>
  );
};

export default Banner;
