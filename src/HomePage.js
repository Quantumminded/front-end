import React from "react";

// IMPORT COMPONENT
import HomeCard from "./Components/HomePage/HomeCard";
import HomeHeroSection from "./Components/HomePage/HomeHeroSection";

import useCookies from "react-cookie/cjs/useCookies";

function HomePage() {
  return (
    <div className="bg-b2 mb-2 w-full">
      {/* Category Buttons */}
      <ul className="flex justify-around">
        <li className="m-2">
          <button className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-sm lg:btn-sm">
            <a href="/Category/documents">Documents</a>
          </button>
        </li>
        <li className="m-2">
          <button className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-sm lg:btn-sm">
            <a href="/Category/calls">Calls</a>
          </button>
        </li>
        <li className="m-2">
          <button className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-sm lg:btn-sm">
            <a href="/Category/translations">Translations</a>
          </button>
        </li>
      </ul>
      
      {/* Hero Section */}
      <HomeHeroSection />

      {/* Category Container */}
      <div className="mr-auto ml-auto">
        {/* Documents Text */}
        <h2 className="mt-3 mb-3 ml-7 text-2xl font-bold text-yellow-300">
          Most popular in Docs
        </h2>
        {/* Start Documents Container */}
        <div className="flex justify-center gap-5">
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
        {/* End Documents Container */}

        {/* Translations Text */}
        <h2 className="mt-3 mb-3 ml-7 text-2xl font-bold text-yellow-300">
          Most popular in Translations
        </h2>
        {/* Start Translations Container */}
        <div className="flex justify-center gap-5">
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
        {/* End Translations Container */}

        {/* Calls Text */}
        <h2 className="mt-3 mb-3 ml-7 text-2xl font-bold text-yellow-300">
          Most popular in Calls
        </h2>
        {/* Start Calls Container */}
        <div className="flex justify-center gap-5">
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
        {/* End Calls Container */}
      </div>

      {/* card container Grid */}
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8 p-5">
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
