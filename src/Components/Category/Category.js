import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// IMPORT COMPONENT
import Banner from "./Banner";
import CategoryButtons from "../HomePage/CategoryButtons";
import HomeCard2 from "../HomePage/HomeCard2";

function Category() {
  const { category } = useParams();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_FETCH}/api/category/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setCards(data.filter((card) => card.type === category));
        setLoading(false);
      });
  }, [category]);

  return (
    <>
      <CategoryButtons />
      <Banner />
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <button className="btn loading mb-32">loading</button>
        </div>
      ) : (
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-y2 mx-7 mt-4 py-2 text-center bg-b2 rounded-2xl uppercase">{cards[0].type}</h2>
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8 p-5">
              {cards.map((card) => (
                <div key={card.id} className="bg-white rounded-lg ">
                  <HomeCard2 card={card} />
                </div>
              ))}
            </div>
          </div>
      )}
    </>
  );
}

export default Category;
