import React from 'react'
import DashBoardCard from './DashBoardCard'
export default function CreatedTasks({ userOpenTask, user }) {
    return (<>
        <div className='grid grid-cols-4 grid-rows-4 gap-2'>
            {userOpenTask.map((ele, i) => <DashBoardCard key={i} task={ele} user={user} />)}
            <div className='rounded bg-black '>
            </div>
        </div>
    </>)
}
