import React from 'react'
import { Link } from 'react-router-dom'
import useContextHook from '../../../utils/customContextHook'
import LogoutButton from '../../Login/LogoutButton'

export default function ProfileIcon() {
    const { user } = useContextHook()
    if (!user) return <p>Loading...</p>
    return (
        <>

            <div className="flex flex-1">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="overflow-hidden relative w-12 h-12 rounded bg-gray-100 dark:bg-gray-600">
                        {user.image ?
                            <img className="w-full h-full object-cover rounded absolute shadow flex items-center justify-center" src={user.image} alt="Default avatar" />
                            :
                            <svg className=" w-full h-full object-cover rounded absolute shadow flex items-center justify-center text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>}
                    </div>
                    <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                        <li><Link to='/Profile'>Profile</Link></li>
                        <li><Link to='/Dashboard'>Dashboard</Link></li>
                        <li><Link to='/Settings'>Settings</Link></li>
                        <li><LogoutButton /></li>
                    </ul>
                </div>
            </div >
        </>
    )

}
