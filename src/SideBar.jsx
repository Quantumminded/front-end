import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./Components/Login/LogoutButton.jsx";
export default function SideBar() {
  return (<nav className="bg-gray-800 h-screen">
    <ul className="py-4 px-2">
      <li className="mb-4">
        <NavLink to="/Profile" className="block font-semibold text-gray-400 hover:text-white" activeClassName="text-white">
          Profile
        </NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/Dashboard" className="block font-semibold text-gray-400 hover:text-white" activeClassName="text-white">
          Dashboard
        </NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/messages" className="block font-semibold text-gray-400 hover:text-white" activeClassName="text-white">
          Messages
        </NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/settings" className="block font-semibold text-gray-400 hover:text-white" activeClassName="text-white">
          Settings
        </NavLink>
      </li>
      <li className="mb-4">
        <LogoutButton className="block font-semibold text-gray-400 hover:text-white" />
      </li>
    </ul>
  </nav>);
}

