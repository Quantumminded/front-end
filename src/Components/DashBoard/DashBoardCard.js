import { Link } from "react-router-dom";
import React from "react";

function DashBoardCard({ language, task, user }) {
  const { id, active, title, description, type, price, languages, users_id } =
    task;
  return (
    <div className="wrapper antialiased text-gray-900 mb-10">
      <div className="">
        <div className="relative bottom-0 left-0">
          <div className="absolute bottom-14 right-0 p-3 bg-transparent">
            {languages &&
              languages.map((ele) => (
                // console.log(ele.length)
                <img
                  className="p-2"
                  src={`https://flagcdn.com/24x18/${ele}.png`}
                  alt="language"
                />
              ))}
          </div>

          <img
            className="w-full shadow rounded-2xl bg-white"
            src="https://picsum.photos/400/300"
            alt="pic"
          />
        </div>
        <div className="relative px-4 -mt-8">
          <div className="bg-cyan-200 p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              {/* CATEGORY OF SERVICES */}
              <span className="bg-y1 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                {type ? type : "PlaceHolderType"}
              </span>
              {/* LANGUAGE SPOKEN */}
              <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                {languages
                  ? languages.map((ele) => <>{ele}&bull;</>)
                  : "It &bull; De &bull; En"}
              </div>
              {/* PROFILE PIC  */}
              <div className="avatar flex justify-end ml-2">
                <div className="w-12 rounded-full">
                  <img src={user.image} alt="img" />
                </div>
              </div>
            </div>
            {/* SMALL DESCIPTION OF SERVICE */}
            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight ">
              {title ? title : "PlaceHolder Title"}
            </h4>
            {/* PRICE OF SERVICE */}
            <div className="mt-1">
              {price ? price : "100€"}
              <span className="text-gray-600 text-sm"> /h</span>
            </div>
            {/* REATING SECTION */}
            <div className="mt-4">
              {/* REATING BY STARS */}
              <span className="text-teal-600 text-md font-semibold">✮ 4/5</span>
              {/* RATING BASED ON NUMBER OF RATING  */}
              <span className="text-sm text-gray-600 ml-1">
                (based on 234 ratings)
              </span>
            </div>
            <Link to="/ProductDetails">
              <div className="text-center underline">More Details</div>
            </Link>
          </div>
          {/* BOOK NOW BUTTONS */}
          <div className="text-gray-600 flex justify-center text-sm align-top">
            <div className="align-top">
              <button className="h-12 w-40 float-left bg-b3 hover:bg-blue-800 text-white text-xl font-bold p-2 m-2 rounded-full -mt-2 shadow-2xl">
                <Link to="/Checkout">&nbsp;Book Now&nbsp;</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardCard;
