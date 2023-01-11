import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
// // // IMPORT COMPONENT
import HomeCard2 from "./Components/HomePage/HomeCard2";

function Category2() {
    const [cards, setCards] = useState([]);
    let { category,type } = useParams();

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch(`https://super-secret-backend.onrender.com//api/category/${category}`);
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCards();
  }, [category]);

  return (
    <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
        {cards.filter(card => card.type === type).map(card => (
          
          <HomeCard2 key={card.id} card={card} />
          
        ))}
      </div>
  )
}

export default Category2