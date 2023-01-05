import React from "react";
import { Link } from "react-router-dom";

function HomeCard3() {
  return (
    <div className="wrapper bg-gray-400 antialiased text-gray-900 mb-10">
      <div className="bg-b2">
        <div className="relative bottom-0 left-0">
          <button className="absolute h-12 w-12 p-3 m-3 right-0 justify-center rounded-full bg-transparent hover:bg-red-500 text-red-700 hover:text-white hover:border-transparent animate-pulse">
            <i className="material-icons md-18 blue">favorite</i>
          </button>
          <Link className="absolute bottom-14 right-0 p-3 bg-transparent  animate-pulse">
            <img
              className="p-2"
              src="https://flagcdn.com/24x18/de.png"
              alt="language"
            />
            <img
              className="p-2"
              src="https://flagcdn.com/24x18/it.png"
              alt="language"
            />
            <img
              className="p-2"
              src="https://flagcdn.com/24x18/gb-eng.png"
              alt="language"
            />
          </Link>
          <img
            className="w-full shadow rounded"
            src="https://picsum.photos/400/300"
            alt="pic"
          />
        </div>
        <div className="relative px-4 -mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="px-6 py-4 bg-yellow-300">
              <div className="font-bold text-center text-2xl mb-2 text-blue-900">
                John D
              </div>
              <div className="text-400 text-center text-xl font-bold mb-2 text-gray-600">
                Translator
              </div>
              <p className="text-gray-700 text-lg mb-2 font-bold text-center">
                I will translate german italian<br></br> english and vice versa
              </p>
              <div className="grid grid-cols justify-between">
                <p className="col-start-1 text-400 text-xl font-bold mb-2 text-gray-500">
                  100 € / Session
                </p>
                <p className="col-end-3 text-400 text-left text-xl mb-2 text-orange-500">
                  ✮ 4.5
                </p>
              </div>
            </div>
            <div className="text-gray-600 px-6 py-5 bg-yellow-400 flex justify-between text-sm items-center">
              <div>
                <button className="h-12 w-40 float-left bg-blue-500 hover:bg-blue-800 text-white text-xl font-bold p-2 m-2 rounded-full animate-bounce">
                  &nbsp;Book Now&nbsp;
                </button>
              </div>
              <div>
                <button className="h-12 w-12 float-right bg-orange-500 hover:bg-orange-800 text-white text-lg font-bold py-2 px-3 pb-1 rounded-full">
                  <i className="material-icons md-18 blue">email</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard3;
