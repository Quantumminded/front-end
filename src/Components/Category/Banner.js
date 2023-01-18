import React from "react";

const Banner = () => {
    return (
        <div className="hero min-h-min" style={{ backgroundImage: `url("https://www.compilatio.net/media/cache/adv_content_block_boxed/2020/11/4189-compilatio-translation.png")` }}>
          <div className="hero-overlay bg-opacity-70"></div>
          {/* Text Over Hero Img. */}
          <div className="hero-content text-center text-neutral-content py-16">
            <div className="max-w-md ">
                <h1 className="mb-5 text-4xl font-extrabold text-y1">Freelance Translation Services</h1>
                <p className='mb-5 text-black font-bold'>We connect you to a group of elite freelance translators who are adept in multiple languages and industries. Our team of expert translators ensure that your documents, websites and presentations are translated with precision and clarity, to convey your message effectively to your desired audience.</p>
            </div>
          </div>
      </div> 
    );
};

export default Banner;