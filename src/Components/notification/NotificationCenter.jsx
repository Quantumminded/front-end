import React from "react";

export default function NotificationCenter() {
  return (
    <>
      {/* The button */}
      <div className="dropdown dropdown-end">
        <button
          tabIndex={0}
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          type="button"
          className="inline-flex relative items-center p-3 text-sm font-medium text-center text-b3 bg-y2 rounded-lg hover:bg-b3 hover:text-y2 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
            20
          </div>
        </button>
        <ul
          tabIndex={0}
          className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-center"
        >
          <li>TestNotification1</li>
          <li>TestNotification2</li>
          <li>TestNotification3</li>
        </ul>
      </div>
    </>
  );
}
