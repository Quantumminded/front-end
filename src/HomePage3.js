import React, { useEffect, useState } from 'react';

import CategoryButtons from "./Components/HomePage/CategoryButtons";
import HomeHeroSection from "./Components/HomePage/HomeHeroSection";
import HomeCard2 from "./Components/HomePage/HomeCard2";

function HomePage3() {
    const [cards, setCards] = useState([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
    useEffect(() => {
      async function fetchCards() {
        try {
          const response = await fetch('https://super-secret-backend.onrender.com/api/task/all');
          const data = await response.json();
          setCards(data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchCards();
    }, []);
    console.log(cards[0])
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
  
        {/* Carousel for small screens */}
        @media only screen and (max-width: 767px) {
          <div>
            {/* Prev button */}
            <button
              onClick={() => setCurrentCardIndex(currentCardIndex - 1)}
              disabled={currentCardIndex === 0}
            >
              Prev
            </button>
  
            {/* Current card */}
            <HomeCard2 key={cards[currentCardIndex].id} card={cards[currentCardIndex]} />
  
            {/* Next button */}
            <button
              onClick={() => setCurrentCardIndex(currentCardIndex + 1)}
              disabled={currentCardIndex === cards.length - 1}
            >
              Next
            </button>
          </div>
        }
  
        {/* Responsive grid for medium and up screens */}
        @media only screen and (min-width: 768px) {
          <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
            {cards.filter(card => card.type === 'document').map(card => (
              <HomeCard2 key={card.id} card={card} />
            ))}
          </div>
        }
      </>
    );
  }

export default HomePage3;
