import React from 'react'
import { Link } from 'react-router-dom'

export default function SelectionCard({ type, description, path }) {
    function scrollIntoView() {
        setTimeout(() => {
            const elmntToView = document.getElementById(path);
            elmntToView.scrollIntoView({ behavior: 'smooth' })
        }, 1000)

    }
    return (
        <div className="relative flex items-center justify-center">
            <img src="https://i.ibb.co/kqt7S1z/img-1.png" alt="chair" />
            <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
                <div className="flex items-center justify-center flex-col h-full">
                    <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-normal text-center text-y1">
                        {type}
                    </h2>
                    <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                    </p>
                </div>
                <div className="px-4 md:w-auto w-full">
                    <button className="w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-y2 focus:outline-none">
                        <Link onClick={scrollIntoView} to={path}>Select</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
