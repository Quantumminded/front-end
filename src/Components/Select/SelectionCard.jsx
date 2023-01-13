import React from 'react'
import { Link } from 'react-router-dom'

export default function SelectionCard({ type, description, path, image }) {
    function scrollIntoView() {
        setTimeout(() => {
            const elmntToView = document.getElementById(path);
            elmntToView.scrollIntoView({ behavior: 'smooth' })
        }, 1000)

    }
    return (
        <div className="relative flex items-center justify-center">
            <img className='aspect-square rounded-3xl  object-cover' src={image} alt="chair" />
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
                    <Link onClick={scrollIntoView} to={path}>
                        <button className="w-full rounded-2xl hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-y2 focus:outline-none">
                            Select
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
