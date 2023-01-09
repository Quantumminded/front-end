import React, { useState } from "react";
import HomeCard from "./Components/HomePage/HomeCard";
import CategoryButtons from "./Components/HomePage/CategoryButtons";
import HomeHeroSection from "./Components/HomePage/HomeHeroSection";


function HomePage2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    <HomeCard />,
  ];

  const handleNextClick = () => {
    if (currentIndex === cards.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(cards.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className=" bg-white">
      <CategoryButtons />

      <HomeHeroSection />

      {/* Documents cards section */}

      <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7 mt-7">
        Most popular in Documents
      </h2>
      <div className="container mx-auto px-7 pt-6 gap-8">
        <div className=" md:hidden lg:hidden lg:gap-8 xl:hidden">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded border-gray-300 ${
                currentIndex === index ? "block" : "hidden"
              }`}
            >
              {card}
            </div>
          ))}
        </div>
        <div className="hidden sm:justify-between md:grid md:grid-cols-3 md:gap-5 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-5 xl:gap-8">
          {cards.map((card, index) => (
            <div key={index} className="rounded border-gray-300">
              {card}
            </div>
          ))}
        </div>
      </div>

      {/* Carousel navigation */}
      <div className="container mx-auto px-7 flex justify-between mt-6">
        <button
          onClick={handlePrevClick}
          className="text-gray-700 hover:text-gray-900 font-bold py-3 px-4 rounded-l"
        >
          Prev
        </button>
        <button
          onClick={handleNextClick}
          className="text-gray-700 hover:text-gray-900 font-bold py-3 px-4 rounded-r"
        >
          Next
        </button>
      </div>

      {/* Calls cards section */}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7 mt-7">
        Most popular in Calls
      </h2>
      <div className="container mx-auto px-7 pt-6 gap-8">
        <div className=" md:hidden lg:hidden lg:gap-8 xl:hidden">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded border-gray-300 ${
                currentIndex === index ? "block" : "hidden"
              }`}
            >
              {card}
            </div>
          ))}
        </div>
        <div className="hidden sm:justify-between md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-5 xl:gap-8">
          {cards.map((card, index) => (
            <div key={index} className="rounded border-gray-300">
              {card}
            </div>
          ))}
        </div>
      </div>

      {/* Carousel navigation */}
      <div className="container mx-auto px-7 flex justify-between mt-6">
        <button
          onClick={handlePrevClick}
          className="text-gray-700 hover:text-gray-900 font-bold py-3 px-4 rounded-l"
        >
          Prev
        </button>
        <button
          onClick={handleNextClick}
          className="text-gray-700 hover:text-gray-900 font-bold py-3 px-4 rounded-r"
        >
          Next
        </button>
      </div>

      {/* Translations cards section */}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7 mt-7">
        Most popular in Translations
      </h2>
      <div className="container mx-auto px-7 pt-6 gap-8">
        <div className=" md:hidden lg:hidden lg:gap-8 xl:hidden">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded border-gray-300 ${
                currentIndex === index ? "block" : "hidden"
              }`}
            >
              {card}
            </div>
          ))}
        </div>
        <div className="hidden sm:justify-between md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-5 xl:gap-8">
          {cards.map((card, index) => (
            <div key={index} className="rounded border-gray-300">
              {card}
            </div>
          ))}
        </div>
      </div>

      {/* Carousel navigation */}
      <div className="container mx-auto px-7 flex justify-between mt-6">
        <button
          onClick={handlePrevClick}
          className="text-gray-700 hover:text-gray-900 font-bold py-3 px-4 rounded-l"
        >
          Prev
        </button>
        <button
          onClick={handleNextClick}
          className="text-gray-700 hover:text-gray-900 font-bold py-3 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HomePage2;
