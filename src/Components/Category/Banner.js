import React from "react";

const Banner = () => {
    return (
        <div className="hero min-h-min" style={{ backgroundImage: `url("https://www.compilatio.net/media/cache/adv_content_block_boxed/2020/11/4189-compilatio-translation.png")` }}>
          <div className="hero-overlay bg-opacity-70"></div>
          {/* Text Over Hero Img. */}
          <div className="hero-content text-center text-neutral-content py-16">
            <div className="max-w-md ">
                <h1 className="mb-5 text-5xl font-extrabold text-y1">Finde the perfect match !!!</h1>
                <p className='mb-5 text-black font-bold'>Toffee powder toffee jelly sweet roll candy. Carrot cake biscuit candy canes lollipop sugar plum brownie. Danish sweet macaroon cupcake sesame snaps caramels pastry chocolate bar. Tart l</p>
            </div>
          </div>
      </div> 
    );
};

export default Banner;