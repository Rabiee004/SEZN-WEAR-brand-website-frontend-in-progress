import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 md:px-16 text-white relative z-10">

      {/* Brand */}
      <Link to="/">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-playfair tracking-widest">
          SEZN Wear
        </h1>
      </Link>

      {/* Right Side (Nav + Cart) */}
      <div className="flex items-center space-x-6">

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:opacity-80">Home</Link>
          <Link to="/products" className="hover:opacity-80">Collections</Link>
          <a href="#" className="hover:opacity-80">About</a>
          <a href="#" className="hover:opacity-80">Contact</a>
        </nav>

        {/* Cart Icon */}
        <Link to="/cart" className="relative hover:opacity-80 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.843l.383 1.533m0 0L6.75 14.25h10.5l1.644-6.874a1.125 1.125 0 00-1.087-1.376H5.106zm0 0h13.644M9 18a1.5 1.5 0 11-3 0m9 0a1.5 1.5 0 11-3 0"
            />
          </svg>

          {/* Cart Count Bubble */}
          <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </Link>

      </div>

    </header>
  );
}

export default Navbar;
