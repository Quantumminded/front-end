import React from "react";
import { useEffect, useState } from "react";

// // // IMPORT COMPONENT
import HomeCard2 from "./Components/HomePage/HomeCard2";
import HomeHeroSection from "./Components/HomePage/HomeHeroSection";
import CategoryButtons from "./Components/HomePage/CategoryButtons";

function HomePage4() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  // Add state to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState({
    document: 0,
    call: 0,
    translation: 0,
  });

  useEffect(() => {
    setLoading(true);
    async function fetchCards() {
      try {
        const response = await fetch(
          "https://ultra-top-secret-backend-production.up.railway.app/api/task/all"
        );
        const data = await response.json();
        setCards(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCards();
  }, []);

  // Function to handle previous button click
  const handlePreviousClick = (type) => {
    if (currentIndex[type] > 0) {
      setCurrentIndex({
        ...currentIndex,
        [type]: currentIndex[type] - 1,
      });
    }
  };

  // Function to handle next button click
  const handleNextClick = (type) => {
    if (
      currentIndex[type] <
      cards.filter((card) => card.type === type).length - 1
    ) {
      setCurrentIndex({
        ...currentIndex,
        [type]: currentIndex[type] + 1,
      });
    }
  };

  return (
    <>
      <CategoryButtons />
      <HomeHeroSection />
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <button className="btn loading my-20">loading</button>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7 mt-7">
            Most popular in Calls
          </h2>
          <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
            {cards
              .filter((card) => card.type === "call")
              .slice(currentIndex["call"], currentIndex["call"] + 1)
              .map((card) => (
                <HomeCard2 key={card.id} card={card} />
              ))}
          </div>
          <div className="text-center">
            <button
              className="btn mr-2"
              onClick={() => handlePreviousClick("call")}
            >
              Previous
            </button>
            <button className="btn" onClick={() => handleNextClick("call")}>
              Next
            </button>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7 mt-7">
            Most popular in Documents
          </h2>
          <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
            {cards
              .filter((card) => card.type === "document")
              .slice(currentIndex["document"], currentIndex["document"] + 1)
              .map((card) => (
                <HomeCard2 key={card.id} card={card} />
              ))}
          </div>
          <div className="text-center">
            <button
              className="btn mr-2"
              onClick={() => handlePreviousClick("document")}
            >
              Previous
            </button>
            <button className="btn" onClick={() => handleNextClick("document")}>
              Next
            </button>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7 mt-7">
            Most popular in Transaltions
          </h2>
          <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
            {cards
              .filter((card) => card.type === "translation")
              .slice(
                currentIndex["translation"],
                currentIndex["translation"] + 1
              )
              .map((card) => (
                <HomeCard2 key={card.id} card={card} />
              ))}
          </div>
          <div className="text-center">
            <button
              className="btn mr-2"
              onClick={() => handlePreviousClick("translation")}
            >
              Previous
            </button>
            <button
              className="btn"
              onClick={() => handleNextClick("translation")}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default HomePage4;
