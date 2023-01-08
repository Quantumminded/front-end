import React from "react";

// // // IMPORT COMPONENT
import HomeCard from "./Components/HomePage/HomeCard";
import HomeCard3 from "./Components/HomePage/HomeCard3";
import HomeHeroSection from "./Components/HomePage/HomeHeroSection";
import CategoryButtons from "./Components/HomePage/CategoryButtons";

import useCookies from "react-cookie/cjs/useCookies";

function HomePage3() {
  return (
    <>
      {/* DISPLAY BUTTON FOR EACH TYPE */}
      <CategoryButtons />
      {/* HERO SECTION DISPLAY IMG WITH TEXT OVER IT */}
      <HomeHeroSection />

      {/* Documents cards section */}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7 mt-7">
        Most popular in Documents
      </h2>
      <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
        <HomeCard3 />
      </div>

      {/* Calls cards section */}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7">
        Most popular in Calls
      </h2>
      <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
        <HomeCard3 />
      </div>

      {/* Translations cards section */}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7">
        Most popular in Translations
      </h2>
      <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
        <HomeCard3 />
      </div>
    </>
  );
}

export default HomePage3;
