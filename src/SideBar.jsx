import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./Components/Login/LogoutButton.jsx";
export default function SideBar() {

  return (<nav className="bg-b3 h-screen">
    <ul className="py-4 px-2">
      <li className="mb-4">
        <NavLink to="/Profile" className={(navData) => (navData.isActive ? "text-white block font-semibold hover:text-white" : 'text-gray-400 block font-semibold hover:text-white')}>
          Profile
        </NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/Dashboard" className={(navData) => (navData.isActive ? "text-white block font-semibold hover:text-white" : 'text-gray-400 block font-semibold hover:text-white')}>
          Dashboard
        </NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/messages" className={(navData) => (navData.isActive ? "text-white block font-semibold hover:text-white" : 'text-gray-400 block font-semibold hover:text-white')} >
          Messages
        </NavLink>
      </li>
      <li className="mb-4">
        <NavLink to="/settings" className={(navData) => (navData.isActive ? "text-white block font-semibold hover:text-white" : 'text-gray-400 block font-semibold hover:text-white')} >
          Settings
        </NavLink>
      </li>
      <li className="mb-4">
        <LogoutButton className={(navData) => (navData.isActive ? "text-white block font-semibold hover:text-white" : 'text-gray-400 block font-semibold hover:text-white')} />
      </li>
    </ul>
  </nav >);
}

