import React from "react";
import { useEffect, useState } from "react";

// // // IMPORT COMPONENT
import HomeCard2 from "./Components/HomePage/HomeCard2";
import HomeHeroSection from "./Components/HomePage/HomeHeroSection";
import CategoryButtons from "./Components/HomePage/CategoryButtons";

function ServicePage() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

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
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7 mt-7 text-center">
            Most popular in Documents
          </h2>
          <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
            {cards
              .filter((card) => card.type === "document")
              .map((card) => (
                <HomeCard2 key={card.id} card={card} />
              ))}
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7 text-center">
            Most popular in Calls
          </h2>
          <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
            {cards
              .filter((card) => card.type === "call")
              .map((card) => (
                <HomeCard2 key={card.id} card={card} />
              ))}
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7 text-center">
            Most popular in Translations
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
