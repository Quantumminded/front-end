import React from 'react'

function HomeHeroSection() {
  return (
    <div className="hero min-h-min" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
        {/* Text Over Hero Img. */}
        <div className="hero-content text-center text-neutral-content mt-20">
          <div className="max-w-md ">
              <h1 className="mb-5 text-5xl font-bold">Finde the perfect match !!!</h1>
              <p className='mb-5'>Toffee powder toffee jelly sweet roll candy. Carrot cake biscuit candy canes lollipop sugar plum brownie. Danish sweet macaroon cupcake sesame snaps caramels pastry chocolate bar. Tart l</p>
          </div>
        </div>
      </div> 
  )
}

export default HomeHeroSection