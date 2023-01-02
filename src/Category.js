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