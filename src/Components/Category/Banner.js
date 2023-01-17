import React from "react";

const Banner = () => {
    return (
        <div className="hero min-h-min py-12 my-5  " style={{ backgroundImage: `url("https://www.compilatio.net/media/cache/adv_content_block_boxed/2020/11/4189-compilatio-translation.png")` }}>
        {/* Text Over Hero Img. */}
        <div className="hero-content text-center text-neutral-content mt-20">
          <div className="max-w-md ">
              <h1 className="mb-5 text-5xl font-bold text-b1">Finde the perfect match !!!</h1>
              <p className='mb-5 text-b1 font-bold'>Toffee powder toffee jelly sweet roll candy. Carrot cake biscuit candy canes lollipop sugar plum brownie. Danish sweet macaroon cupcake sesame snaps caramels pastry chocolate bar. Tart l</p>
          </div>
        </div>
      </div> 
    );
};

export default Banner;