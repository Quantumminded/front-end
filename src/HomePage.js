import React from 'react';

import HomeCard from './Components/HomePage/HomeCard';
import HomeCard2 from './Components/HomePage/HomeCard2';

import useCookies from 'react-cookie/cjs/useCookies';


function HomePage() {
  return (
    <div className='bg-cyan-700 mb-2 w-full'>
      {/* Category Buttons */}
      <ul className='flex justify-around'>
        <li className='m-2'><button className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-sm lg:btn-sm"><a href='/'>Documents</a></button></li>
        <li className='m-2'><button className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-sm lg:btn-sm"><a href='/Category'>Calls</a></button></li>
        <li className='m-2'><button className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-sm lg:btn-sm"><a href='/'>Translations</a></button></li>
      </ul>
      <div className="hero min-h-min" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
        {/* Text Over Hero Img. */}
        <div className="hero-content text-center text-neutral-content mt-20">
          <div className="max-w-md ">
              <h1 className="mb-5 text-5xl font-bold">Finde the perfect match !!!</h1>
              <p className='mb-5'>Toffee powder toffee jelly sweet roll candy. Carrot cake biscuit candy canes lollipop sugar plum brownie. Danish sweet macaroon cupcake sesame snaps caramels pastry chocolate bar. Tart l</p>
          </div>
        </div>
      </div> 

      {/* Category Container */}
      <div className='mr-auto ml-auto'>

        {/* Documents Text */}
        <h2 className='mt-3 mb-3 ml-7 text-2xl font-bold text-yellow-300'>Most popular in Docs</h2>
        {/* Start Documents Container */}
        <div className='flex justify-center gap-5'>
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
        {/* End Documents Container */}

        

      {/* Translations Text */}
      <h2 className='mt-3 mb-3 ml-7 text-2xl font-bold text-yellow-300'>Most popular in Translations</h2>
      {/* Start Translations Container */}
      <div className='flex justify-center gap-5'>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
      {/* End Translations Container */}
    

    {/* Calls Text */}
    <h2 className='mt-3 mb-3 ml-7 text-2xl font-bold text-yellow-300'>Most popular in Calls</h2>
    {/* Start Calls Container */}
    <div className='flex justify-center gap-5'>
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
    </div> 
    {/* End Calls Container */}
  </div>
</div>
           
  )
}

export default HomePage