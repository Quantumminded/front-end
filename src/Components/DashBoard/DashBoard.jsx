import React, { useEffect, useState } from 'react'
import SideBar from '../../SideBar.jsx'
import { client } from '../../utils/client.mjs'

import useContextHook from '../../utils/customContextHook'
import ProfileIcon from '../notification/Profile/ProfileIcon'
import DashBoardCard from './DashBoardCard.js'
import DashBoardTabs from './DashBoardTabs.jsx'
import OnGoinDashBoard from './OnGoinDashBoard.jsx'

export default function DashBoard() {
    const { user, token } = useContextHook()
    const [userOpenTask, setUserOpenTask] = useState()
    const [AllAcceptedTask, setAllAcceptedTask] = useState()
    const [activeTab, setActiveTab] = useState('Dashboard')
    //Gets All requests
    // useEffect(() => {
    //     client(token).get(`/requests/all/${user.languages}`)
    // })

    //TODO: FINISH THE BACKEND AND FRONTEND CONNECTION FOR THE USERS TASKS
    useEffect(() => {
        fetchTask()
        acceptedTasks()
    }, [])
    async function fetchTask() {
        try {
            const { data } = await client(token).get('user/task')
            setUserOpenTask(data)
        } catch (error) {
            console.log(error)
        }
    }

    async function acceptedTasks() {
        try {
            const { data } = await client(token).get('/task/accepted')
            setAllAcceptedTask(data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <><div className='container flex'>
            <SideBar />
            <div className='container mx-auto flex 	min-h-screen'>
                {/* Profile 1/4Coloum */}
                <div className=' w-1/4 bg-slate-700'>
                    <div className='container'>
                        <div className='flex items-center flex-col p-4'>
                            <ProfileIcon />
                            {/* Image + Name */}
                            {
                                user && <><p className='text-sm text-black'>{user.firstname + ' ' + user.lastname}</p>
                                    <p className='text-sm text-black'>{user.email}</p></>
                            }
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
                    <div className=' w-full h-screen flex gap-4 p-4'>
                        {/* Active Offers */}
                        {activeTab === "Dashboard" && userOpenTask && userOpenTask.map((ele, i) => <DashBoardCard key={i} task={ele} user={user} />)}
                        {/* ACCEPTED TASK/REQUESTS*/}
                        {activeTab === "Active" && <OnGoinDashBoard AllAcceptedTask={AllAcceptedTask} />}
                        {/* History of All the Work */}
                        {activeTab === "Finished" && <OnGoinDashBoard />}





                    </div>
                </div>
            </div>
            {/* DashBoard 3/4 Coloum End */}
        </div>
        </>
    )
}
