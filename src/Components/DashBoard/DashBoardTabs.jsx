import React from 'react';

export default function DashBoardTabs({ setActiveTab, activeTab }) {
    const active = "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
    const inactive = "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
    function handleTab(e) {
        console.log(e.target.name)
        setActiveTab(e.target.name)
    }
    return (
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="mr-2">
                <a name="Dashboard" onClick={handleTab} className={activeTab === "Dashboard" ? active : inactive}>Dashboard</a>
            </li>
            <li className="mr-2">
                <a name="Active" onClick={handleTab} className={activeTab === "Active" ? active : inactive}>OnGoing</a>
            </li>
            <li className="mr-2">
                <a name="Finished" onClick={handleTab} className={activeTab === "Finished" ? active : inactive}>Finished</a>
            </li>
        </ul>
    )
}
