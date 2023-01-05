
import { Link } from "react-router-dom";
import React from "react";

function HomeCard({ language }) {
  
  return (
    <div className="wrapper bg-gray-400 antialiased text-gray-900 mb-10">
      <div className="bg-white ">
        <Link to="/ProductDetails">
          <div className="relative bottom-0 left-0 rounded-lg">
            <div className="absolute bottom-14 right-0 p-3 bg-transparent  animate-pulse">
              {language &&
                language.map((ele) => (
                  // console.log(ele.length)
                  <img
                    className="p-2"
                    src={`https://flagcdn.com/24x18/${ele}.png`}
                    alt="language"
                  />
                ))}
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
            </div>
            <img
              className="w-full shadow rounded"
              src="https://picsum.photos/400/300"
              alt="pic"
            />
          </div>
        </Link>
        <div className="relative px-4 -mt-8">
          <div className="bg-cyan-200 p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                Calls
              </span>
              <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                Italian &bull; German
              </div>
            </div>
            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              Calls in German & italian
            </h4>
            <div className="mt-1">
              $100
              <span className="text-gray-600 text-sm"> /h</span>
            </div>
            <div className="mt-4">
              <span className="text-teal-600 text-md font-semibold">
                4/5 ratings{" "}
              </span>
              <span className="text-sm text-gray-600">
                (based on 234 ratings)
              </span>
            </div>
          </div>
          <div className="text-gray-600 px-6 py-5  flex justify-center text-sm items-center">
            <div>
              <button className="h-12 w-40 float-left bg-b3 hover:bg-blue-800 text-white text-xl font-bold p-2 m-2 rounded-full animate-bounce">
                <Link to="/Checkout">&nbsp;Book Now&nbsp;</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
