import React, { useEffect, useState } from 'react'
import { client } from '../../utils/client.mjs'
import useContextHook from '../../utils/customContextHook'
import HomeCard from '../HomePage/HomeCard'
import ProfileIcon from '../notification/Profile/ProfileIcon'
import DashBoardTabs from './DashBoardTabs.jsx'
import OnGoinDashBoard from './OnGoinDashBoard.jsx'

export default function DashBoard() {
    const { user, token } = useContextHook()
    const [activeTab, setActiveTab] = useState()
    //Gets All requests
    // useEffect(() => {
    //     client(token).get(`/requests/all/${user.languages}`)
    // })
    return (
        <>
            <div className='container mx-auto flex 	min-h-screen'>
                {/* Profile 1/4Coloum */}
                <div className=' w-1/4 bg-orange-500'>
                    <div className='container'>
                        <div className='flex items-center flex-col p-4'>
                            <ProfileIcon />
                            {/* Image + Name */}
                            <p className=' text-base text-black'>{user && user.email}</p>
                        </div>
                        {/* Response Rates */}
                    </div>
                    {/* Inbox */}

                    {/* Link Your Socialmedia */}
                </div>
                {/* Profile 1/4Coloum END*/}
                {/* DashBoard 3/4 Coloum */}

                {/* TABS */}
                <div className='w-3/4'>
                    <DashBoardTabs setActiveTab={setActiveTab} activeTab={activeTab} />
                    <div className=' w-full h-screen bg-emerald-600 grid grid-cols-4 gap-4 p-4'>

                        {/* Active Offers */}

                        <HomeCard />


                    </div>
                </div>
            </div>
            {/* DashBoard 3/4 Coloum End */}
        </>
    )
}
