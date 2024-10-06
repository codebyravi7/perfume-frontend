import React, { useState } from "react";
import { Search, Menu, X, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/logo.png";
import { useAuthContext } from "../context/AppContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("");
  const { authUser, logout } = useAuthContext();

  const navigate = useNavigate();

  const handleSearch = () => {
    setIsOpen(false);
    setKeyword("");
    navigate(`/search/${keyword}`);
  };

  const handleCollectionChange = (e) => {
    setIsOpen(false);
    const collection = e.target.value;
    setSelectedCollection(collection);
    if (
      collection !== "100000000" &&
      collection !== "5000" &&
      collection !== "10000" &&
      collection !== "15000" &&
      collection !== "20000"
    ) {
      navigate("/unknown");
    }
    navigate(`/${collection}`);
  };

  const handleLogout = async () => {
    setIsDropdownOpen(false);
    await logout();
    navigate("/login");
  };

  return (
    <nav className="bg-pink-100 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img className="w-28" src={logo} alt="Scent Heaven" />
              </Link>
            </div>
            {/* Main Navigation Links */}
            <div className="hidden xl:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-pink-600 hover:bg-pink-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <div className="relative inline-block text-left">
                  <select
                    value={selectedCollection}
                    onChange={handleCollectionChange}
                    className="text-pink-600 border border-pink-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-pink-500"
                  >
                    <option value="100000000">Select a Collection</option>
                    <option value="5000">{"price <= 5000"}</option>
                    <option value="10000">{"price <= 10000"}</option>
                    <option value="15000">{"price <= 15000"}</option>
                    <option value="20000">{"price <= 20000"}</option>
                  </select>
                </div>
                <Link
                  to="/about"
                  className="text-pink-600 hover:bg-pink-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-pink-600 hover:bg-pink-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          {/* Search and User Profile */}
          <div className="flex items-center">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search perfumes..."
                className="bg-pink-50 text-pink-600 placeholder-pink-400 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-300"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <Search className="h-5 w-5 text-pink-400" />
              </button>
            </div>
            {/* User Profile Dropdown */}
            <div className="ml-4 user-profile">
              {authUser ? (
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center p-2 rounded-full bg-pink-200 text-pink-600 hover:bg-pink-300 focus:outline-none"
                  >
                    <User className="h-6 w-6" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                      <Link
                        onClick={() => setIsDropdownOpen(false)}
                        to="/user/cart"
                        className="block px-4 py-2 text-pink-600 hover:bg-pink-100"
                      >
                        Cart
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-pink-600 hover:bg-pink-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  {location.pathname === "/register" && (
                    <Link
                      to="/login"
                      className="text-sm font-medium text-white bg-pink-600 hover:bg-pink-800 px-4 py-2 rounded-md"
                    >
                      Login
                    </Link>
                  )}
                  {location.pathname === "/login" && (
                    <Link
                      to="/register"
                      className="text-sm font-medium text-white bg-pink-600 hover:bg-pink-800 px-4 py-2 rounded-md"
                    >
                      Register
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-pink-600 hover:text-pink-600 hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              onClick={() => setIsOpen(false)}
              to="/"
              className="text-pink-600 hover:bg-pink-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <select
              value={selectedCollection}
              onChange={handleCollectionChange}
              className="bg-pink-50 text-pink-600 placeholder-pink-400 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              <option value="100000000">Select a Collection</option>
              <option value="5000">{"price <= 5000"}</option>
              <option value="10000">{"price <= 10000"}</option>
              <option value="15000">{"price <= 15000"}</option>
              <option value="20000">{"price <= 20000"}</option>
            </select>
            <Link
              onClick={() => setIsOpen(false)}
              to="/about"
              className="text-pink-600 hover:bg-pink-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/contact"
              className="text-pink-600 hover:bg-pink-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            {/* Mobile Search */}
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search perfumes..."
                className="bg-pink-50 text-pink-600 placeholder-pink-400 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-300"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <Search className="h-5 w-5 text-pink-400" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
