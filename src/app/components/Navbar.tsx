"use client";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-center">
        <Link
          href="/"
          className="text-white text-2xl font-semibold transition-colors duration-300 ease-in-out hover:text-yellow-400 hover:scale-110 transform"
        >
          Dj-Calculator
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
