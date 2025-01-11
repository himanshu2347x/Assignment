import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white shadow-lg">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex space-x-7">
          <Link className="flex items-center py-4 px-2" to="/">
            <span className="font-semibold text-gray-500 text-lg">MyApp</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          <Link className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300" to="/login">
            Login
          </Link>
          <Link className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300" to="/register">
            Register
          </Link>
          <Link className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-400 transition duration-300" to="/about">
            About
          </Link>
          <Link className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-400 transition duration-300" to="/services">
            Services
          </Link>
          <Link className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-400 transition duration-300" to="/contact">
            Contact
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button">
            <svg className="w-6 h-6 text-gray-500 hover:text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="hidden mobile-menu">
      <ul className="">
        <li className="active"><Link className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold" to="/">Home</Link></li>
        <li><Link className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300" to="/login">Login</Link></li>
        <li><Link className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300" to="/register">Register</Link></li>
        <li><Link className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300" to="/about">About</Link></li>
        <li><Link className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300" to="/services">Services</Link></li>
        <li><Link className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300" to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
