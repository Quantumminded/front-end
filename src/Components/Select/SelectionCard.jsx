import React from 'react'
import { Link } from 'react-router-dom'

export default function SelectionCard({ type, description, path, image }) {
    console.log(path)
    function scrollIntoView() {
        setTimeout(() => {
            const elmntToView = document.getElementById(path);
            elmntToView.scrollIntoView({ behavior: 'smooth' })
        }, 1000)

    }
    return (
        <div className="relative flex items-center justify-center">
            <img className='aspect-square rounded-3xl  object-cover opacity-80' src={image} alt="chair" />
            <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
                <div className="flex items-center justify-center flex-col h-full">
                    <h2 className="xl:px-10 md:px-2 px-7 text-5xl font-extrabold leading-normal text-center text-y2 stroke-black">
                        {type}
                    </h2>
                    <p className="xl:px-10 md:px-2 px-7 font-bold leading-normal text-center text-b1 mt-4">
                        Post your personal {type} 
                    </p>
                </div>
                <div className="px-4 md:w-auto w-full">
                    <Link onClick={scrollIntoView} to={path}>
                        <button className="w-full py-3 px-6 text-b1 bg-y2 rounded-md shadow hover:bg-b3 hover:text-y2 self-center text-center font-bold border border-black hover:border-y2">
                            Select
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
