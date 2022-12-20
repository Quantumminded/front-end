import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-indigo-600 text-withe font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500 m-0.5'>
        {props.children}
    </button>
  )
}

export default Button