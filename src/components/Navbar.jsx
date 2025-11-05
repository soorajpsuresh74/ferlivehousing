import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/35853510.jpg";

const Navbar = () => {
  const appName = import.meta.env.VITE_APP_NAME || "Ferlive Housing";

  return (
    <nav className="w-full bg-white shadow-sm px-6 md:px-12 lg:px-20 py-4">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors"
        >
          {/* <img
            src={logo}
            width="32"
            height="32"
            className="inline-block rounded-full"
            alt={`${appName} logo`}
          /> */}
          <span>{appName}</span>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                to="/services"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                About Us
              </Link>
            </li>
          </ul>

          <Link
            to="/contactus"
            className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
