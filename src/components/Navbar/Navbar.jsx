import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 work-sans-font">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content gap-3 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/">
                <li className="text-[#23BE0A] hover:bg-white border rounded-lg font-semibold hover:border-[#23BE0A]">
                  <a>Home</a>
                </li>
              </Link>
              <Link to="/listedBooks">
                <li className="text-[#23BE0A] hover:bg-white border rounded-lg font-semibold hover:border-[#23BE0A]">
                  <a>Listed Books</a>
                </li>
              </Link>
              <li className="text-[#23BE0A] hover:bg-white border rounded-lg font-semibold hover:border-[#23BE0A]">
                <a>Pages to Read</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-xl md:text-2xl">
            Book Vibe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-3">
            <Link to="/">
              <li className="text-[#23BE0A] hover:bg-white border rounded-lg font-semibold hover:border-[#23BE0A]">
                <a>Home</a>
              </li>
            </Link>
            <Link to="/listedBooks">
              <li className="text-[#23BE0A] hover:bg-white border rounded-lg font-semibold hover:border-[#23BE0A]">
                <a>Listed Books</a>
              </li>
            </Link>
            <li className="text-[#23BE0A] hover:bg-white border rounded-lg font-semibold hover:border-[#23BE0A]">
              <a>Pages to Read</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-x-3 md:mr-4">
          <a className="btn font-semibold bg-[#23BE0A] text-white">Sign In</a>
          <a className="btn font-semibold bg-[#59C6D2] text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
