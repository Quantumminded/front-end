import React from "react";
import { Link } from "react-router-dom";
import { fullName } from "../../languages";


function HomeCard2({ card }) {
  console.log(card);
  return (
    <>
      <div key={card.id} className="wrapper antialiased text-gray-900 mb-10">
        <div className="wrapper antialiased text-gray-900 mb-10">
          <div>
            <div className="relative bottom-0 left-0">
              <div className="absolute bottom-14 right-0 p-3 bg-transparent">
                {/* FLEGs map based on language  */}
                {card.languages.map((language) => (
                  <img
                    key={language}
                    className="p-2"
                    src={`https://flagcdn.com/24x18/${language.toLowerCase()}.png`}
                    alt={language}
                  />
                ))}
              </div>

              <img
                className="w-full shadow rounded-2xl bg-white"
                src="https://etranslationservices.com/backup/wp-content/uploads/2020/12/Online-Translation-Tools-e1617588803861.jpg"
                alt="pic"
              />
            </div>
            <div className="relative px-4 -mt-8">
              <div className=" p-6 rounded-lg shadow-2xl">
                {/* PROFILE PIC  */}
                <div className="avatar flex justify-center mb-3 ">
                  <div className="w-12 rounded-full">
                    <img src={card.image} alt="profile pictrue" />
                  </div>
                </div>
                <div className="flex items-baseline">
                  {/* TYPE OF SERVICES */}
                  <span className="bg-b2 text-y2 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    {card.type}
                  </span>
                </div>
                {/* LANGUAGE SPOKEN */}
                <div className="mt-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  {fullName(card.languages[0])} |{" "}
                  {fullName(card.languages[1])}
                </div>
                {/* SMALL DESCIPTION OF SERVICE */}
                <h4 className="mt-2 text-lg uppercase leading-tight">
                  {card.title}
                </h4>
                {/* PRICE OF SERVICE */}
                <div className="mt-2">
                  {card.price}
                  <span className="text-gray-600 text-sm"> /h</span>
                </div>
                {/* REATING SECTION */}
                <div className="mt-4">
                  {/* REATING BY STARS */}
                  <span className="text-teal-600 text-md font-semibold">
                    ✮ 4/5
                  </span>
                  {/* RATING BASED ON NUMBER OF RATING  */}
                  <span className="text-sm text-gray-600 ml-1">
                    (based on 234 ratings)
                  </span>
                </div>
                <Link to={`/ProductDetails/${card.id}`}>
                  <div className="text-center underline">More Details</div>
                </Link>
              </div>
              {/* BOOK NOW BUTTONS */}
              <div className="text-gray-600 flex justify-center text-sm align-top">
                <div className="align-top ">
                  <button className="h-12 w-40 float-left bg-y2 hover:bg-b2 text-b2 hover:text-y2 text-xl font-bold p-2 m-2 rounded-full -mt-2 shadow-lg">
                    <Link to={`/Checkout/${card.id}`}>
                      &nbsp;Book Now&nbsp;
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCard2;
