import React from 'react'
import { useContext } from 'react';
export default function ProfileIcon({ image }) {
    if (!image)
        return (
            <>

                <div className="flex justify-end flex-1 px-2">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="overflow-hidden relative w-10 h-10 rounded bg-gray-100 dark:bg-gray-600">
                            <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>
                        <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                            <li><a href='#'>Profile</a></li>
                            <li><a href='#'>Dashboard</a></li>
                            <li><a href='#'>Settings</a></li>
                            <li><a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a></li>
                        </ul>
                    </div>
                </div >
            </>
        )
    return (
        <>
            <div className="flex justify-end flex-1 px-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="overflow-hidden relative w-10 h-10 rounded bg-gray-100 dark:bg-gray-600">
                        <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                    <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                        <li><a href='#'>Profile</a></li>
                        <li><a href='#'>Dashboard</a></li>
                        <li><a href='#'>Settings</a></li>
                        <li><a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a></li>
                    </ul>
                </div>
            </div >
        </>
    )
}
