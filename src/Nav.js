import React, { useState } from "react";
// import Button from "./Button";
import "./index.css";

function Nav() {
  // let Links = [
  //   { name: "HOME", link: "/HomePage" },
  //   { name: "SERVICES", link: "/" },
  //   { name: "ABOUT", link: "/" },
  //   { name: "CONTACT", link: "/" },
  // ];
  // let [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  return (
    // <nav className="shadow-md w-full fixed top-0 left-0">
    //   <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
    //     <div className="font-bold text-2xl cursor-pointer flex items-center text-grey-800">
    //       <span className="text-3xl text-indigo-600 mr-1 pt-2">
    //         <ion-icon name="logo-ionic"></ion-icon>
    //       </span>
    //       Name
    //     </div>
    //     <div
    //       onClick={() => setOpen(!open)}
    //       className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
    //     >
    //       <ion-icon name={open ? "close" : "menu"}></ion-icon>
    //     </div>
    //     <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-i ${ open ? "top-20 opacity-100" : "top-[-490px]" } md:opacity-100`} >
    //       {Links.map((link) => (
    //         <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
    //           <a
    //             href={link.link}
    //             className="text-gray-800 hover:text-grey-400 duration-500"
    //           >
    //             {link.name}
    //           </a>
    //         </li>
    //       ))}
    //       <Button>SignIn</Button>
    //       <Button>Register</Button>
    //     </ul>
    //   </div>
    // </nav>

    <nav className="w-full bg-b3 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <h2 className="text-2xl font-bold text-white">LOGO</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-y1">
                <a href="/HomePage">Home</a>
              </li>
              <li className="text-white hover:text-y1">
                <a href="/About">About US</a>
              </li>
              <li className="text-white hover:text-y1">
                <a href="/TeamSection">Contact US</a>
              </li>
              <li className="text-white hover:text-y1">
                <a href="/ClientProfile">ClientProfile</a>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:hidden">
              <a
                href="/SignIn"
                className="inline-block w-full px-4 py-2 text-center text-b1 bg-yellow-300 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </a>
              <a
                href="/SelectRequest"
                className="inline-block w-full px-4 py-2 text-center text-b1 bg-yellow-300 rounded-md shadow hover:bg-gray-100"
              >
                Post a request
              </a>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <a
            href="/SignIn"
            className="px-4 py-2 text-b1 bg-yellow-300 rounded-md shadow hover:bg-gray-800 hover:text-y1"
          >
            Sign in
          </a>
          <a
            href="/SelectRequest"
            className="px-4 py-2  text-b1 bg-yellow-300 rounded-md shadow hover:bg-gray-800 hover:text-y1"
          >
            Post a request
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
