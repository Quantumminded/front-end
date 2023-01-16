import React from 'react'

function HomeHeroSection() {
  return (
    <div className="hero min-h-min" style={{ backgroundImage: `url("https://www.atltranslate.com/hubfs/languages%20for%20translation.png")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        {/* Text Over Hero Img. */}
        <div className="hero-content text-center text-neutral-content my-16">
          <div className="max-w-md ">
              <h1 className="mb-5 text-5xl font-bold text-y1">Finde the perfect match !!!</h1>
              <p className='mb-5 text-y1 font-bold'>Toffee powder toffee jelly sweet roll candy. Carrot cake biscuit candy canes lollipop sugar plum brownie. Danish sweet macaroon cupcake sesame snaps caramels pastry chocolate bar. Tart l</p>
          </div>
        </div>
      </div> 
  )
}

export default HomeHeroSection