import React from "react";
import { useEffect, useState } from "react";

// // // IMPORT COMPONENT
import HomeCard2 from "../HomePage/HomeCard2";
import HomeHeroSection from "../HomePage/HomeHeroSection";
import CategoryButtons from "../HomePage/CategoryButtons";

function ServicePage() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchCards() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_FETCH}/api/task/all`
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
          <h2 className="text-2xl font-bold tracking-tight text-y2 mx-7 mt-4 py-2 text-center bg-b2 rounded-2xl">
            Most Popular In Documents
          </h2>
          <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
            {cards
              .filter((card) => card.type === "document")
              .map((card) => (
                <HomeCard2 key={card.id} card={card} />
              ))}
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-y2 mx-7 mt-4 py-2 text-center bg-b2 rounded-2xl">
            Most Popular In Calls
          </h2>
          <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
            {cards
              .filter((card) => card.type === "call")
              .map((card) => (
                <HomeCard2 key={card.id} card={card} />
              ))}
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-y2 mx-7 mt-4 py-2 text-center bg-b2 rounded-2xl">
            Most Popular In Translations
          </h2>
          <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
            {cards
              .filter((card) => card.type === "translation")
              .map((card) => (
                <HomeCard2 key={card.id} card={card} />
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default ServicePage;
