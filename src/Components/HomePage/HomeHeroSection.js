import React from 'react'

function HomeHeroSection() {
  return (
    <div className="hero min-h-min" style={{ backgroundImage: `url("https://www.atltranslate.com/hubfs/languages%20for%20translation.png")` }}>
        <div className="hero-overlay bg-opacity-70"></div>
        {/* Text Over Hero Img. */}
        <div className="hero-content text-center text-neutral-content py-16">
          <div className="max-w-md ">
              <h1 className="mb-5 text-5xl font-extrabold text-y1">Finde the perfect match !!!</h1>
              <p className='mb-5 text-y1 font-bold'>We connect you with a network of expert freelance translators who specialize in a wide range of languages and industries. Our team of professional translators ensures that your documents, websites, and presentations are accurately translated to effectively communicate your message to your target audience.</p>
          </div>
        </div>
      </div> 
  )
}

export default HomeHeroSection