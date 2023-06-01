import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-gradient-to-t from-[#7e90fe0d] to-[#9873ff0d]">
      <div className="bg-[url('../public/vector2.png')] bg-no-repeat  bg-right-top h-[190px]">
        <nav className="container mx-auto">
          <div className="mx-auto px-4 py-10 flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-black font-bold text-2xl">
                <span className="text-indigo-500">JOB</span> PLANET
              </h1>
            </div>

            <div className="sm:hidden">
              <button
                type="button"
                className="block text-black hover:text-gray-500 focus:text-gray-500 focus:outline-none"
                onClick={toggleNavbar}
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19 7h-14v2h14V7Zm0 6h-14v2h14v-2Zm0 6h-14v2h14v-2Z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6h16v2H4V6zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                    />
                  )}
                </svg>
              </button>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <Link
                to="/"
                className="text-black hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/statistics"
                className="text-black hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Statistics
              </Link>
              <Link
                to="/appliedjobs"
                className="text-black hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Applied Jobs
              </Link>
              <Link
                to="/blog"
                className="text-black hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </Link>
            </div>

            <div className="hidden md:block">
              <button className="btn btn-primary border-0 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:text-black">
                Start Applying
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="sm:hidden bg-gradient-to-t from-[#7e90fe0d] to-[#9873ff0d]">
              <Link
                to="/"
                className="block text-black hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/statistics"
                className="block text-black hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Statistics
              </Link>
              <Link
                to="/appliedjobs"
                className="block text-black hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Applied Jobs
              </Link>
              <Link
                to="/blog"
                className="block text-black hover:bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Blog
              </Link>
              <div>
                <button className="btn btn-primary border-0 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] mt-2 hover:text-black">
                  Start Applying
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
