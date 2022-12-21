import React from 'react'

function HomePage() {
  return (
    <div className='bg-cyan-700'>
      <div>
        {/* Links to Category */}
        <ul className='flex justify-around'>
          <li><a href='/'>Documents</a></li>
          <li><a href='/'>Calls</a></li>
          <li><a href='/'>Translation</a></li>
        </ul>
      </div>
      {/* Header Image */}
      <div className='flex justify-center'>
        <img className='h-60 w-screen ml-8 mr-8 mt-3' src='https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' alt='documents img'></img>
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