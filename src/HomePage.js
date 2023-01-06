import React from "react";


// // // IMPORT COMPONENT
import HomeCard from "./Components/HomePage/HomeCard";
import HomeHeroSection from "./Components/HomePage/HomeHeroSection";
import CategoryButtons from "./Components/HomePage/CategoryButtons";
import Test from "./Components/HomePage/Test";


import useCookies from "react-cookie/cjs/useCookies";


function HomePage() {
  return (
    <>

     <CategoryButtons />

     <HomeHeroSection />

      {/* Documents cards section */}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7 mt-7">Most popular in Documents</h2>
      <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
        <HomeCard />
      </div>

    {/* Calls cards section */}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7">Most popular in Calls</h2>
      <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
        <HomeCard />
      </div>

    {/* Translations cards section */}
    <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7">Most popular in Translations</h2>
    <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
      <HomeCard />
    </div>

    
       
    </>
  );
}

export default HomePage;

// import React, { useEffect, useState } from 'react';

// const HomePage = () => {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);
//   const numCards = 5; // Assuming there are 5 cards in the carousel

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handlePreviousButtonClick = () => {
//     setCurrentCardIndex((currentCardIndex - 1 + numCards) % numCards);
//   };

//   const handleNextButtonClick = () => {
//     setCurrentCardIndex((currentCardIndex + 1) % numCards);
//   };

//   return (
//     <>
//       <CategoryButtons />
//       <HomeHeroSection />

//       {/* Documents cards section */}
//       <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7 mt-7">Most popular in Documents</h2>
//       <div className={`container mx-auto px-7 ${width > 768 ? 'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5' : 'relative'} pt-6 gap-8`}>
//         {width > 768 ? (
//           <>
//             {/* Render 5 HomeCard components in a grid on desktop */}
//             <div className="rounded border-gray-300">
//               <HomeCard />
//             </div>
//             <div className="rounded border-gray-300">
//               <HomeCard />
//             </div>
//             <div className="rounded border-gray-300">
//               <HomeCard />
//             </div>
//             <div className="rounded border-gray-300">
//               <HomeCard />
//             </div>
//             <div className="rounded border-gray-300">
//               <HomeCard />
//             </div>
//           </>
//         ) : (
//           <>
//             {/* Render a carousel with buttons on mobile */}
//             <button className="absolute left-0 top-50% transform -translate-y-1/2 rounded-full bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 leading-none focus:outline-none focus:shadow-outline-blue" type="button" onClick={handlePreviousButtonClick}>
//               &lt;
//             </button>
//             <div className="relative">
//               {/* Render a single HomeCard component in the carousel on mobile */}
//               <div className="rounded border-gray-300">
//                 <HomeCard />
                
//               </div>
//             </div>
//             <button className="absolute right-0 top-50% transform -translate-y-1/2 rounded-full bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 leading none focus:outline-none focus:shadow-outline-blue" type="button" onClick={handleNextButtonClick}>
//               &gt;
//             </button>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default HomePage;




