import React from 'react'

function HeroPage() {
  return (
  //  <div className=''>
  //   <div>
  //     {/* Img  */}
  //     <div className='bg-[url("https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80")] h-96 w-screen bg-cover bg-center p-24'>
  //       {/* text hover img */}
  //       <div className="text-black font-bold">Find the perfect helper <br></br> for your Calls/Documents</div>
  //       {/* search bar */}
  //       <div className="flex mt-5">
  //         <div className="mb-3 xl:w-96">
  //           <div className="input-group relative flex  items-stretch mb-4">
  //             <input type="search" className="form-control flex-auto min-w-0  w-full px-6 bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700  focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
  //             <button className="btn p-3 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg  duration-150  items-center" type="button" id="button-addon2">
  //               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  //                 <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
  //               </svg>
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  //   {/* Cards Container */}
  //   <div className='h-96 md:flex justify-center'>
  //     {/* Document Card */}
  //     <div className="flex justify-center m-5">
  //       <div className="rounded-lg shadow-lg bg-white max-w-sm">
  //         <a href="/homePage" data-mdb-ripple="true" data-mdb-ripple-color="light">
  //           <img className="rounded-t-lg h-full" src="https://images.unsplash.com/photo-1583521214690-73421a1829a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
  //         </a>
  //       </div>
  //     </div>
  //     {/* Calls Card */}
  //     <div className="flex justify-center m-5">
  //       <div className="rounded-lg shadow-lg bg-white max-w-sm">
  //         <a href="/homePage" data-mdb-ripple="true" data-mdb-ripple-color="light">
  //           <img className="rounded-t-lg h-full" src="https://images.unsplash.com/photo-1617103023188-fb6c08d8b8b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
  //         </a>
  //       </div>
  //     </div>
  //     {/* Translation Card */}
  //     <div className="flex justify-center m-5">
  //       <div className="rounded-lg shadow-lg bg-white max-w-sm">
  //         <a href="/homePage" data-mdb-ripple="true" data-mdb-ripple-color="light">
  //           <img className="rounded-t-lg h-full" src="https://images.unsplash.com/photo-1543165796-5426273eaab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // </div> 
  <div className='bg-cyan-600'>
  {/* Hero section big img */}
  <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Find the perfect helper for Translations</h1>
        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button className="btn btn-primary"><a href='/HomePage'>Get Started</a></button>
      </div>
    </div>
  </div>
  {/* Hero section category Documents */}
  <div className="hero min-h-16 bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <img src="https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdW1lbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Documents</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  {/* Hero section category Calls */}
  <div className="hero min-h-16 bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FsbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Calls</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  {/* Hero section category Translation */}
  <div className="hero min-h-16 bg-base-200 mb-3">
    <div className="hero-content flex-col lg:flex-row">
      <img src="https://images.unsplash.com/photo-1643920508624-9ac3ae5a2adb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRpY3Rpb25hcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Translations</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>

 {/* TEST LANDING HERO SECTION */}
  <div className="dark:bg-gray-900">
            <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
                <div className="z-30 relative lg:w-1/2">
                    <div className="hidden dark:bg-gray-800 bg-yellow-300 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
                        <div className="w-full lg:w-auto lg:-mr-32">
                            <img src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png" alt="image with decent chairs" className="w-full relative z-30 lg:pl-20 px-6 py-14" />
                        </div>
                    </div>
                    <div className="absolute top-0 dark:bg-gray-800 bg-yellow-200 md:h-96 w-full hidden md:block lg:hidden"></div>
                    <div className="w-full h-full lg:hidden bg-yellow-300">
                        <img src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png" alt="image with decent chairs" className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14" />
                    </div>
                </div>
                <div className="bg-yellow-400 dark:bg-gray-800 lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
                    <div>
                        <h1 className="dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">Documents</h1>
                        <p className="dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">Get inspired by our curated selection of luxiwood interiors. We hope get inspired to have luxiwood interior yourself. You’ll find tips here where you can buy a lot of cool furniture,decorations, plants, etc.</p>
                        <button className="dark:bg-white dark:hover:bg-gray-400 dark:hover:text-gray-100 dark:text-gray-800 sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
                            Explore
                            <div className="ml-2 mt-0.5">
                                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33325 8H12.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 10.6667L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 5.33301L12.6667 7.99967" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

</div>
  
  )
}

export default HeroPage