import React from 'react'

function HomePage() {
  return (
    <div className='bg-cyan-700'>
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
      
      <div className='mt-8'>
        {/* H1 most popular in category */}
        <h1 className='ml-8 mr-8 text-xl'>Most popular in Documents</h1>
          {/* Card Container Documents */}
          <div className='flex m-8 gap-5'>
          <div className="card border-2 border-black bg-yellow-300">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
          <div className="card border-2 border-yellow-400">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
          <div className="card border-2 border-yellow-400">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
          <div className="card border-2 border-yellow-400">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
          <div className="card border-2 border-yellow-400">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
          <div className="card border-2 border-yellow-400">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
        </div>
         {/* H1 most popular in category */}
         <h1 className='ml-8 mr-8 text-xl'>Most popular in Calls</h1>
          {/* Card Container Callss */}
          <div className='flex m-8 gap-5'>
          <div className="card border-2 border-yellow-400">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
          <div className="card border-2 border-yellow-400">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
          <div className="card border-2 border-yellow-400">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
          <div className="card border-2 border-yellow-400">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
          <div className="card border-2 border-yellow-400">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
          <div className="card border-2 border-yellow-400">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
        </div>
        {/* H1 most popular in category */}
        <h1 className='ml-8 mr-8 text-xl'>Most popular in Translation</h1>
          {/* Card Container Translation */}
        <div className='flex m-8 gap-5'>
          <div className="card border-2 border-yellow-400">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
          <div className="card border-2 border-yellow-400">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
          <div className="card border-2 border-yellow-400">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
          <div className="card border-2 border-yellow-400">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
          <div className="card border-2 border-yellow-400">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
          <div className="card border-2 border-yellow-400">
            <img src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" className="h-32 w-full object-cover" />
            <div className="px-6 py-4">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-700 text-base">Card description goes here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage