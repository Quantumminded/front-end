import React, { useEffect, useState } from "react";

// // // IMPORT COMPONENT
import HomeCard2 from "./Components/HomePage/HomeCard2";
import HomeHeroSection from "./Components/HomePage/HomeHeroSection";
import CategoryButtons from "./Components/HomePage/CategoryButtons";

function HomePage3() {
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch(
          "https://ultra-top-secret-backend-production.up.railway.app/api/task/all"
        );
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCards();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsSmallScreen(mediaQuery.matches);
    const handleMediaChange = () => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addListener(handleMediaChange);

    return () => mediaQuery.removeListener(handleMediaChange);
  }, []);

  const handleDisabledClick = () => {
    setCurrentCardIndex(0);
  };

  return (
    <>
      {/* DISPLAY BUTTON FOR EACH TYPE */}
      <CategoryButtons />
      {/* HERO SECTION DISPLAY IMG WITH TEXT OVER IT */}
      <HomeHeroSection />

      {/* DOCUMENTS CARD SECTION */}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7 mt-7">
        Most popular in Documents
      </h2>

      {isSmallScreen ? (
        // Carousel for small screens
        <div>
          {/* Prev button */}
          <button
            onClick={() => {
              if (currentCardIndex === 0) {
                setCurrentCardIndex(
                  cards.filter((card) => card.type === "document").length - 1
                );
              } else {
                setCurrentCardIndex(currentCardIndex - 1);
              }
            }}
            disabled={
              currentCardIndex === 0 ||
              cards.filter((card) => card.type === "document").length === 0
            }
          >
            Prev
          </button>

          {/* Current card */}
          {/* <HomeCard2 key={cards.filter(card => card.type === 'document')[currentCardIndex].id} card={cards.filter(card => card.type === 'document')[currentCardIndex]} /> */}

          {/* Next button */}
          <button
            onClick={() => {
              if (
                currentCardIndex ===
                cards.filter((card) => card.type === "document").length - 1
              ) {
                setCurrentCardIndex(0);
              } else {
                setCurrentCardIndex(currentCardIndex + 1);
              }
            }}
            disabled={
              currentCardIndex ===
                cards.filter((card) => card.type === "document").length - 1 ||
              cards.filter((card) => card.type === "document").length === 0
            }
          >
            Next
          </button>
        </div>
      ) : (
        // Responsive grid for medium and up screens
        <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
          {cards
            .filter((card) => card.type === "document")
            .map((card) => (
              <HomeCard2 key={card.id} card={card} />
            ))}
        </div>
      )}

      {/* CALLS CARD SECTION */}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7 mt-7">
        Most popular in Calls
      </h2>

      {isSmallScreen ? (
        // Carousel for small screens
        <div>
          {/* Prev button */}
          <button
            onClick={() => {
              if (currentCardIndex === 0) {
                setCurrentCardIndex(
                  cards.filter((card) => card.type === "call").length - 1
                );
              } else {
                setCurrentCardIndex(currentCardIndex - 1);
              }
            }}
            disabled={
              currentCardIndex === 0 ||
              cards.filter((card) => card.type === "call").length === 0
            }
          >
            Prev
          </button>

          {/* Current card */}
          <HomeCard2
            key={
              cards.filter((card) => card.type === "call")[currentCardIndex].id
            }
            card={
              cards.filter((card) => card.type === "call")[currentCardIndex]
            }
          />

          {/* Next button */}
          <button
            onClick={() => {
              if (
                currentCardIndex ===
                cards.filter((card) => card.type === "call").length - 1
              ) {
                setCurrentCardIndex(0);
              } else {
                setCurrentCardIndex(currentCardIndex + 1);
              }
            }}
            disabled={
              currentCardIndex ===
                cards.filter((card) => card.type === "call").length - 1 ||
              cards.filter((card) => card.type === "call").length === 0
            }
          >
            Next
          </button>
        </div>
      ) : (
        // Responsive grid for medium and up screens
        <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
          {cards
            .filter((card) => card.type === "call")
            .map((card) => (
              <HomeCard2 key={card.id} card={card} />
            ))}
        </div>
      )}

      {/* Translations cards section */}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7 mt-7">
        Most popular in Translations
      </h2>

      {isSmallScreen ? (
        // Carousel for small screens
        <div>
          {/* Prev button */}
          <button
            onClick={() => {
              if (currentCardIndex === 0) {
                setCurrentCardIndex(
                  cards.filter((card) => card.type === "translation").length - 1
                );
              } else {
                setCurrentCardIndex(currentCardIndex - 1);
              }
            }}
            disabled={
              currentCardIndex === 0 ||
              cards.filter((card) => card.type === "translation").length === 0
            }
          >
            Prev
          </button>

          {/* Current card */}
          {/* <HomeCard2 key={cards.filter(card => card.type === 'translation')[currentCardIndex].id} card={cards.filter(card => card.type === 'translation')[currentCardIndex]} /> */}

          {/* Next button */}
          <button
            onClick={() => {
              if (
                currentCardIndex ===
                cards.filter((card) => card.type === "translation").length - 1
              ) {
                setCurrentCardIndex(0);
              } else {
                setCurrentCardIndex(currentCardIndex + 1);
              }
            }}
            disabled={
              currentCardIndex ===
                cards.filter((card) => card.type === "translation").length -
                  1 ||
              cards.filter((card) => card.type === "translation").length === 0
            }
          >
            Next
          </button>
        </div>
      ) : (
        // Responsive grid for medium and up screens
        <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
          {cards
            .filter((card) => card.type === "translation")
            .map((card) => (
              <HomeCard2 key={card.id} card={card} />
            ))}
        </div>
      )}
    </>
  );
}
export default HomePage3;
