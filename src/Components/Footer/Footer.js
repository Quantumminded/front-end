import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-4 bg-b2 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-y1 sm:text-center dark:text-y1">
        © 2023{" "}
        <Link to="https://flowbite.com/" className="hover:underline">
          Website name™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-y1 dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/About" className="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link to="/Privacy" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/TeamSection" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
