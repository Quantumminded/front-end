import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// IMPORT COMPONENT
import Banner from "./Components/Category/Banner";
import CategoryButtons from "./Components/HomePage/CategoryButtons";
import HomeCard2 from "./Components/HomePage/HomeCard2";

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
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8 p-5">
          {cards.map((card) => (
            <div key={card.id} className="bg-white rounded-lg ">
              <HomeCard2 card={card} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Category;
