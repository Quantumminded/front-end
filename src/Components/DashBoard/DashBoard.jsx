import React from 'react'
import useContextHook from '../../utils/customContextHook'
import HomeCard from '../HomePage/HomeCard'
import ProfileIcon from '../notification/Profile/ProfileIcon'

export default function DashBoard() {
    const { user, token } = useContextHook()
    return (
        <div className='container mx-auto flex 	min-h-screen'>
            <div className=' w-1/4 bg-orange-500'>
                {/* Profile */}
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
            <div className=' w-3/4 bg-emerald-600 grid grid-cols-4 gap-4 p-4'>

                {/* Active Offers */}

                <HomeCard />


                <HomeCard />


                <HomeCard />


                <HomeCard />


                <HomeCard />


                <HomeCard />


                <HomeCard />


                <HomeCard />


                <HomeCard />

            </div>
        </div>
    )
}
