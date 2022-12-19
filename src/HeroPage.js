import React from 'react'

function HeroPage() {
  return (
   <div>
  
    <div>
      {/* Img  */}
      <div className='bg-[url("https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80")] h-96 w-screen bg-cover bg-center p-24'>
        {/* text hover img */}
        <div className="text-black font-bold">Find the perfect helper <br></br> for your Calls/Documents</div>
        {/* search bar */}
        <div className="flex mt-5">
          <div className="mb-3 xl:w-96">
            <div className="input-group relative flex  items-stretch mb-4">
              <input type="search" className="form-control flex-auto min-w-0  w-full px-6 bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700  focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
              <button className="btn p-3 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg  duration-150  items-center" type="button" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Cards Container */}
    <div className='md:flex justify-center'>
      {/* Document Card */}
      <div className="flex justify-center m-5">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1583521214690-73421a1829a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Document</h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
          </div>
        </div>
      </div>
      {/* Calls Card */}
      <div className="flex justify-center m-5">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1617103023188-fb6c08d8b8b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Calls</h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
          </div>
        </div>
      </div>
      {/* Translation Card */}
      <div className="flex justify-center m-5">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1543165796-5426273eaab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Translation</h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
          </div>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default HeroPage