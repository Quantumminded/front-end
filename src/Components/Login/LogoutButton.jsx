import React from 'react';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { toast } from "react-toastify";
import useContextHook from '../../utils/customContextHook';


export default function LogoutButton() {
    const { setAuthorized, setUser, setJwttoken } = useContextHook()
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    function handleLogout() {
        // Perform logout logic here, such as clearing the user's session and cookies
        removeCookie('token');
        setUser(undefined)
        localStorage.removeItem(`token`)
        setAuthorized(false)
        toast.info("Logged out", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: null,
            theme: "colored",
        });
        navigate("/")

    }

    return (
        <div className='text-center'>
            <div className="mt-3 space-y-2 lg:hidden md:hidden">
                <button type="button" onClick={handleLogout} className="inline-block w-full px-4 py-2 text-center text-b1 bg-yellow-300 rounded-md shadow hover:bg-gray-800">
                    Logout
                </button>
            </div>
            <div className="hidden space-x-2 md:inline-block">
                <button type="button" onClick={handleLogout} className="px-4 py-2 text-b1 bg-yellow-300 rounded-md shadow hover:bg-gray-800 hover:text-y1">
                    Logout
                </button>
            </div>
        </div>
    );
}

