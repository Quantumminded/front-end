import React from "react";
import { Link } from "react-router-dom";

// IMPORT COMPONENT
import HomeCard from "./Components/HomePage/HomeCard";
import HomeHeroSection from "./Components/HomePage/HomeHeroSection";
import CategoryButtons from "./Components/HomePage/CategoryButtons";


import useCookies from "react-cookie/cjs/useCookies";


const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]

function HomePage() {
  return (
    <>

     <CategoryButtons />

     <HomeHeroSection />

      {/* Documents cards section */}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7 mt-7">Most popular in Documents</h2>
      <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 pt-6 gap-8">
                
        <div className="rounded border-gray-300" >
          <HomeCard />
        </div>
                
        <div className="rounded border-gray-300" >
          <HomeCard />
        </div>

        <div className="rounded border-gray-300" >
          <HomeCard />
        </div>

        <div className="rounded border-gray-300" >
          <HomeCard />
        </div>

      <div className="rounded border-gray-300" >
        <HomeCard />
      </div>

    </div>
    {/* Calls cards section */}
    <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7">Most popular in Calls</h2>
    <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
                
      <div className="rounded border-gray-300" >
        <HomeCard />
      </div>
                
      <div className="rounded border-gray-300" >
        <HomeCard />
      </div>

      <div className="rounded border-gray-300" >
        <HomeCard />
      </div>

      <div className="rounded border-gray-300" >
        <HomeCard />
      </div>

      <div className="rounded border-gray-300" >
        <HomeCard />
      </div>

    </div>
    {/* Translations cards section */}
    <h2 className="text-2xl font-bold tracking-tight text-gray-900 ml-7">Most popular in Translations</h2>
    <div className="container mx-auto px-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
                
      <div className="rounded border-gray-300" >
        <HomeCard />
      </div>
                
      <div className="rounded border-gray-300" >
        <HomeCard />
      </div>

      <div className="rounded border-gray-300" >
        <HomeCard />
      </div>

      <div className="rounded border-gray-300" >
        <HomeCard />
      </div>

      <div className="rounded border-gray-300" >
        <HomeCard />
      </div>

    </div>
       
    </>
  );
}

export default HomePage;
