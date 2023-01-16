import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <div className="h-screen flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
            <div className="w-full lg:w-1/2">
                <img className="hidden lg:block" src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-12188.jpg?w=740&t=st=1673874032~exp=1673874632~hmac=3e68eb57b778e3fe8828f53d3269bfca9725d5ff354971f1c6f20c3f2fd8f915" alt="404 error img" />
                <img className="hidden md:block lg:hidden" src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-12188.jpg?w=740&t=st=1673874032~exp=1673874632~hmac=3e68eb57b778e3fe8828f53d3269bfca9725d5ff354971f1c6f20c3f2fd8f915" alt="404 error img" />
                <img className="md:hidden" src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-12188.jpg?w=740&t=st=1673874032~exp=1673874632~hmac=3e68eb57b778e3fe8828f53d3269bfca9725d5ff354971f1c6f20c3f2fd8f915" alt="404 error img" />
            </div>
            <div className="w-full lg:w-1/2">
                <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-y2">Looks like you've found the doorway to the great nothing</h1>
                <p className="py-4 text-base text-b1">The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.</p>
                <p className="py-2 text-base text-b1">Sorry about that! Please visit our hompage to get where you need to go.</p>
                <button className="w-full lg:w-auto my-4 border px-1 sm:px-16 py-5 text-b1 bg-y2 rounded-md shadow hover:bg-b3 hover:text-y2 focus:outline-none focus:ring-2  focus:ring-opacity-50">
                    <Link to="/">
                        Go back to Homepage
                    </Link>
                </button>
            </div>
        </div>
  )
}

export default Error