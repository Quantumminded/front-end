import React from 'react'
import useCookies from 'react-cookie/cjs/useCookies';
function HomePage() {
  return (
    <div className='bg-cyan-700 mb-2'>
    {/* Hero Section */}
      <div className="hero min-h-min" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
        <div className="hero-overlay bg-opacity-60">
          {/* Category Buttons */}
          <ul className='flex justify-around'>
            <li className='m-2'><button className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-sm lg:btn-sm"><a href='/'>Documents</a></button></li>
            <li className='m-2'><button className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-sm lg:btn-sm"><a href='/Category'>Calls</a></button></li>
            <li className='m-2'><button className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-sm lg:btn-sm"><a href='/'>Translations</a></button></li>
          </ul>
        </div>
        {/* Text Over Hero Img. */}
        <div className="hero-content text-center text-neutral-content mt-20">
          <div className="max-w-md ">
              <h1 className="mb-5 text-5xl font-bold">Finde the perfect match !!!</h1>
              <p className='mb-5'>Toffee powder toffee jelly sweet roll candy. Carrot cake biscuit candy canes lollipop sugar plum brownie. Danish sweet macaroon cupcake sesame snaps caramels pastry chocolate bar. Tart l</p>
          </div>
        </div>
      </div> 

      {/* Category Container */}
      <div className='ml-5 mr-5'>

        {/* Documents Container */}
        <h2 className='mt-3 mb-3 text-2xl font-bold text-yellow-300'>Most popular in Docs</h2>
        <div className='gap-10 flex'>
          {/* Documents Cards */}
          <div className="card bg-yellow-400 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Docs
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Docs</div> 
              </div>
            </div>
          </div>
          <div className="card bg-yellow-400 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Docs
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Docs</div> 
              </div>
            </div>
          </div>
          <div className="card bg-yellow-400 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Docs
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Docs</div> 
              </div>
            </div>
          </div>
          <div className="card bg-yellow-400 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Docs
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Docs</div> 
              </div>
            </div>
          </div>
        </div>

        

      {/* Translations Container */}
      <h2 className='mt-3 mb-3 text-2xl font-bold text-yellow-300'>Most popular in Translations</h2>
          
      <div className='flex justify-center gap-5'>
        {/* start 1 card */}
				<div className="overflow-auto shadow-2xl rounded-3xl m-3">
          <div className="relative bottom-0 left-0">
            <button className="absolute h-12 w-12 p-3 m-3 right-0 justify-center rounded-full bg-transparent hover:bg-red-500 text-red-700 hover:text-white hover:border-transparent animate-pulse">
              <i className="material-icons md-18 blue">favorite</i>
            </button>
            <a className="absolute bottom-0 right-0 p-3 bg-transparent  animate-pulse">
              <img className="p-2" src="https://flagcdn.com/24x18/de.png" alt="language" />
              <img className="p-2" src="https://flagcdn.com/24x18/it.png" alt="language" />
              <img className="p-2" src="https://flagcdn.com/24x18/gb-eng.png" alt="language" />
            </a>
            <img className="w-full shadow" src="https://picsum.photos/400/300" alt="pic" />
          </div>
					<div className="px-6 py-4 bg-yellow-300">
						<div className="font-bold text-center text-2xl mb-2 text-blue-900">John D</div>
						<div className="text-400 text-center text-xl font-bold mb-2 text-gray-600">Translator</div>
						<p className="text-gray-700 text-lg mb-2 font-bold text-center">I will translate german italian<br></br> english and vice versa</p>
						<div className="grid grid-cols justify-between">
							<p className="col-start-1 text-400 text-xl font-bold mb-2 text-gray-500">100 € / Session</p>
							<p className="col-end-3 text-400 text-left text-xl mb-2 text-orange-500">✮ 4.5</p>
						</div>
					</div>
          <div className="text-gray-600 px-6 py-5 bg-yellow-400 flex justify-between text-sm items-center">
            <div>
              <button className="h-12 w-40 float-left bg-blue-500 hover:bg-blue-800 text-white text-xl font-bold p-2 m-2 rounded-full animate-bounce">&nbsp;Book Now&nbsp;</button>
            </div>
          <div>
            <button className="h-12 w-12 float-right bg-orange-500 hover:bg-orange-800 text-white text-lg font-bold py-2 px-3 pb-1 rounded-full">
             <i className="material-icons md-18 blue">email</i>
            </button>
          </div>
        </div>
			</div>
      {/* End 1 card */}

      {/* start 2 card */}
				<div className="overflow-auto shadow-2xl rounded-3xl m-3">
          <div className="relative bottom-0 left-0">
            <button className="absolute h-12 w-12 p-3 m-3 right-0 justify-center rounded-full bg-transparent hover:bg-red-500 text-red-700 hover:text-white hover:border-transparent animate-pulse">
              <i className="material-icons md-18 blue">favorite</i>
            </button>
            <a className="absolute bottom-0 right-0 p-3 bg-transparent  animate-pulse">
              <img className="p-2" src="https://flagcdn.com/24x18/de.png" alt="language" />
              <img className="p-2" src="https://flagcdn.com/24x18/it.png" alt="language" />
              <img className="p-2" src="https://flagcdn.com/24x18/gb-eng.png" alt="language" />
            </a>
            <img className="w-full shadow" src="https://picsum.photos/400/300" alt="pic" />
          </div>
					<div className="px-6 py-4 bg-yellow-300">
						<div className="font-bold text-center text-2xl mb-2 text-blue-900">John D</div>
						<div className="text-400 text-center text-xl font-bold mb-2 text-gray-600">Translator</div>
						<p className="text-gray-700 text-lg mb-2 font-bold text-center">I will translate german italian<br></br> english and vice versa</p>
						<div className="grid grid-cols justify-between">
							<p className="col-start-1 text-400 text-xl font-bold mb-2 text-gray-500">100 € / Session</p>
							<p className="col-end-3 text-400 text-left text-xl mb-2 text-orange-500">✮ 4.5</p>
						</div>
					</div>
          <div className="text-gray-600 px-6 py-5 bg-yellow-400 flex justify-between text-sm items-center">
            <div>
              <button className="h-12 w-40 float-left bg-blue-500 hover:bg-blue-800 text-white text-xl font-bold p-2 m-2 rounded-full animate-bounce">&nbsp;Book Now&nbsp;</button>
            </div>
          <div>
            <button className="h-12 w-12 float-right bg-orange-500 hover:bg-orange-800 text-white text-lg font-bold py-2 px-3 pb-1 rounded-full">
             <i className="material-icons md-18 blue">email</i>
            </button>
          </div>
        </div>
			</div>
      {/* End 2 card */}

      {/* start 3 card */}
				<div className="overflow-auto shadow-2xl rounded-3xl m-3">
          <div className="relative bottom-0 left-0">
            <button className="absolute h-12 w-12 p-3 m-3 right-0 justify-center rounded-full bg-transparent hover:bg-red-500 text-red-700 hover:text-white hover:border-transparent animate-pulse">
              <i className="material-icons md-18 blue">favorite</i>
            </button>
            <a className="absolute bottom-0 right-0 p-3 bg-transparent  animate-pulse">
              <img className="p-2" src="https://flagcdn.com/24x18/de.png" alt="language" />
              <img className="p-2" src="https://flagcdn.com/24x18/it.png" alt="language" />
              <img className="p-2" src="https://flagcdn.com/24x18/gb-eng.png" alt="language" />
            </a>
            <img className="w-full shadow" src="https://picsum.photos/400/300" alt="pic" />
          </div>
					<div className="px-6 py-4 bg-yellow-300">
						<div className="font-bold text-center text-2xl mb-2 text-blue-900">John D</div>
						<div className="text-400 text-center text-xl font-bold mb-2 text-gray-600">Translator</div>
						<p className="text-gray-700 text-lg mb-2 font-bold text-center">I will translate german italian<br></br> english and vice versa</p>
						<div className="grid grid-cols justify-between">
							<p className="col-start-1 text-400 text-xl font-bold mb-2 text-gray-500">100 € / Session</p>
							<p className="col-end-3 text-400 text-left text-xl mb-2 text-orange-500">✮ 4.5</p>
						</div>
					</div>
          <div className="text-gray-600 px-6 py-5 bg-yellow-400 flex justify-between text-sm items-center">
            <div>
              <button className="h-12 w-40 float-left bg-blue-500 hover:bg-blue-800 text-white text-xl font-bold p-2 m-2 rounded-full animate-bounce">&nbsp;Book Now&nbsp;</button>
            </div>
          <div>
            <button className="h-12 w-12 float-right bg-orange-500 hover:bg-orange-800 text-white text-lg font-bold py-2 px-3 pb-1 rounded-full">
             <i className="material-icons md-18 blue">email</i>
            </button>
          </div>
        </div>
			</div>
      {/* End 3 card */}

      {/* start 4 card */}
				<div className="overflow-auto shadow-2xl rounded-3xl m-3">
          <div className="relative bottom-0 left-0">
            <button className="absolute h-12 w-12 p-3 m-3 right-0 justify-center rounded-full bg-transparent hover:bg-red-500 text-red-700 hover:text-white hover:border-transparent animate-pulse">
              <i className="material-icons md-18 blue">favorite</i>
            </button>
            <a className="absolute bottom-0 right-0 p-3 bg-transparent  animate-pulse">
              <img className="p-2" src="https://flagcdn.com/24x18/de.png" alt="language" />
              <img className="p-2" src="https://flagcdn.com/24x18/it.png" alt="language" />
              <img className="p-2" src="https://flagcdn.com/24x18/gb-eng.png" alt="language" />
            </a>
            <img className="w-full shadow" src="https://picsum.photos/400/300" alt="pic" />
          </div>
					<div className="px-6 py-4 bg-yellow-300">
						<div className="font-bold text-center text-2xl mb-2 text-blue-900">John D</div>
						<div className="text-400 text-center text-xl font-bold mb-2 text-gray-600">Translator</div>
						<p className="text-gray-700 text-lg mb-2 font-bold text-center">I will translate german italian<br></br> english and vice versa</p>
						<div className="grid grid-cols justify-between">
							<p className="col-start-1 text-400 text-xl font-bold mb-2 text-gray-500">100 € / Session</p>
							<p className="col-end-3 text-400 text-left text-xl mb-2 text-orange-500">✮ 4.5</p>
						</div>
					</div>
          <div className="text-gray-600 px-6 py-5 bg-yellow-400 flex justify-between text-sm items-center">
            <div>
              <button className="h-12 w-40 float-left bg-blue-500 hover:bg-blue-800 text-white text-xl font-bold p-2 m-2 rounded-full animate-bounce">&nbsp;Book Now&nbsp;</button>
            </div>
          <div>
            <button className="h-12 w-12 float-right bg-orange-500 hover:bg-orange-800 text-white text-lg font-bold py-2 px-3 pb-1 rounded-full">
             <i className="material-icons md-18 blue">email</i>
            </button>
          </div>
        </div>
			</div>
    </div>
    {/* End 4 card */}

    {/* Start Calls container */}
    <h2 className='mt-3 mb-3 text-2xl font-bold text-yellow-300'>Most popular in Calls</h2>
     <div className='flex justify-center gap-5'>
      {/* Start 1 card */}
      <div className="wrapper bg-gray-400 antialiased text-gray-900 mb-10">
        <div className='bg-cyan-700'>
          <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md" />
          <div className="relative px-4 -mt-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  Calls
                </span>
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  Italian  &bull; German
                </div>  
              </div>
              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Calls in German & italian</h4>
              <div className="mt-1">
                $100
                <span className="text-gray-600 text-sm">  /h</span>
              </div>
              <div className="mt-4">
                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
              </div>  
            </div>
          </div>
        </div>
      </div>
      {/* End 1 Card */}

      {/* Start 2 card */}
      <div className="wrapper bg-gray-400 antialiased text-gray-900 mb-10">
        <div className='bg-cyan-700'>
          <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md" />
          <div className="relative px-4 -mt-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  Calls
                </span>
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  Italian  &bull; German
                </div>  
              </div>
              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Calls in German & italian</h4>
              <div className="mt-1">
                $100
                <span className="text-gray-600 text-sm">  /h</span>
              </div>
              <div className="mt-4">
                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
              </div>  
            </div>
          </div>
        </div>
      </div>
      {/* End 2 Card */}

      {/* Start 3 card */}
      <div className="wrapper bg-gray-400 antialiased text-gray-900 mb-10">
        <div className='bg-cyan-700'>
          <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md" />
          <div className="relative px-4 -mt-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  Calls
                </span>
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  Italian  &bull; German
                </div>  
              </div>
              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Calls in German & italian</h4>
              <div className="mt-1">
                $100
                <span className="text-gray-600 text-sm">  /h</span>
              </div>
              <div className="mt-4">
                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
              </div>  
            </div>
          </div>
        </div>
      </div>
      {/* End 3 Card */}

      {/* Start 4 card */}
      <div className="wrapper bg-gray-400 antialiased text-gray-900 mb-10">
        <div className='bg-cyan-700'>
          <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md" />
          <div className="relative px-4 -mt-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  Calls
                </span>
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  Italian  &bull; German
                </div>  
              </div>
              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Calls in German & italian</h4>
              <div className="mt-1">
                $100
                <span className="text-gray-600 text-sm">  /h</span>
              </div>
              <div className="mt-4">
                <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                <span className="text-sm text-gray-600">(based on 234 ratings)</span>
              </div>  
            </div>
          </div>
        </div>
      </div>
      {/* End 4 Card */}

    </div> 
  </div>
</div>
           
  )
}

export default HomePage