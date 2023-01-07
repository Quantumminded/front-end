import React from 'react'

// IMPORT COMPONENT
import Banner from './Components/Category/Banner';
import HomeCard from './Components/HomePage/HomeCard';


function Category() {
  return (
    <div className='bg-b2'>
      <Banner/>


      {/* Row 1  */}
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8 p-5">
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
      </div>

      {/* Row 2  */}
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8 p-5">
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
      </div>

      {/* Row 3  */}
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8 p-5">
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        
      </div>

      {/* Row 4  */}
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8 p-5">
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
        <div className="rounded border-gray-300">
          <HomeCard />
        </div>
      </div>
    </div>
  )
}

export default Category;

// TEST FETCHING DATA CATEGORY

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import HomeCard from "./Components/HomePage/HomeCard";
// import CategoryButtons from "./Components/HomePage/CategoryButtons";

// function HomePage({ category }) {
//   const [selectedCategory, setSelectedCategory] = useState(category);
//   const [cards, setCards] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);

//       try {
//         // Step 1: Fetch data from the backend
//         const response = await fetch(`https://super-secret-backend.onrender.com/task/all/category=${selectedCategory}`);
//         const data = await response.json();

//         // Step 2: Update the state with the fetched data
//         setCards(data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [selectedCategory]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>An error occurred: {error.message}</div>;
//   }

//   return (
//     <>
//       <CategoryButtons onCategorySelected={setSelectedCategory} selectedCategory={selectedCategory} />

//       <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
//         {cards.map(card => (
//           <HomeCard {...card} />
//         ))}
//       </div>
//     </>
//   );
// }