import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./Components/Login/LogoutButton.jsx";
import ImageUpload from "./Components/upload/ImageUpload.jsx";
import useContextHook from "./utils/customContextHook.js";

function ClientProfile({ setJwttoken }) {
  const { user } = useContextHook();
  return (
    //TODO:Finish ClientProfile
    <>
      {user && (
        <>
          <div className="flex gap-4">
            <div className="w-1/5">
              <nav className="bg-gray-800 h-screen">
                <ul className="py-4 px-2">
                  <li className="mb-4">
                    <NavLink
                      to="/"
                      className="block font-semibold text-gray-400 hover:text-white"
                      activeClassName="text-white"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="mb-4">
                    <NavLink
                      to="/ClientProfile"
                      className="block font-semibold text-gray-400 hover:text-white"
                      activeClassName="text-white"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li className="mb-4">
                    <NavLink
                      to="/messages"
                      className="block font-semibold text-gray-400 hover:text-white"
                      activeClassName="text-white"
                    >
                      Messages
                    </NavLink>
                  </li>
                  <li className="mb-4">
                    <NavLink
                      to="/settings"
                      className="block font-semibold text-gray-400 hover:text-white"
                      activeClassName="text-white"
                    >
                      Settings
                    </NavLink>
                  </li>
                  <li className="mb-4">
                    <LogoutButton
                      setJwttoken={setJwttoken}
                      className="block font-semibold text-gray-400 hover:text-white"
                    />
                  </li>
                </ul>
              </nav>
            </div>
            <div className="w-11/12 mx-auto p-4">
              <div className="rounded relative mt-8 h-48 flex">
                <img
                  src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form1.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded absolute shadow flex items-center justify-center"
                />
                <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded" />
                <div className="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer">
                  <p className="text-xs text-gray-100">Change Cover Photo</p>
                  <div className="ml-2 text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-edit"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                      <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                      <line x1={16} y1={5} x2={19} y2={8} />
                    </svg>
                  </div>
                </div>
                <div className="w-full h-full rounded-full bg-cover bg-center bg-no-repeat relative bottom-0 -mb-10 ml-12 shadow flex items-center">
                  <img
                    src={user.image}
                    alt="profile"
                    className="relative h-20 w-20 object-cover rounded-full shadow "
                  />
                  <div className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-edit"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                      <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                      <line x1={16} y1={5} x2={19} y2={8} />
                    </svg>
                    <p className="text-xs text-gray-100">Edit Picture</p> */}
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <form className="w-4/5 p-4 ">
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      value={user.email}
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      disabled
                    />
                    <label
                      for="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        value={user.firstName}
                        type="text"
                        name="floating_first_name"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_first_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        First name
                      </label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        value={user.lastName}
                        type="text"
                        name="floating_last_name"
                        id="floating_last_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_last_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Last name
                      </label>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        value={user.phonenumber}
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        name="floating_phone"
                        id="floating_phone"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_phone"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Phone number
                      </label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        value={user.address}
                        type="text"
                        name="address"
                        id="address"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_company"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Address
                      </label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                      <input
                        value={user.languages}
                        type="text"
                        name="languages"
                        id="languages"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_company"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Languages
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
                <ImageUpload />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ClientProfile;
