import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
// IMPORT COMPONENT
import Banner from './Components/Category/Banner';
import HomeCard2 from "./Components/HomePage/HomeCard2";

function Category2() {
    const { category } = useParams();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(`https://super-secret-backend.onrender.com/api/category/${category}`)
            .then(response => response.json())
            .then(data => {
                // filter cards to only display those with a matching category
                setCards(data.filter(card => card.type === category));
            });
    }, [category]);

    console.log(cards)
    return (
        <>
            <Banner />
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8 p-5">
                {cards.map(card => (
                    <div key={card.id} className="bg-white rounded-lg ">
                        <HomeCard2 card={card} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Category2;