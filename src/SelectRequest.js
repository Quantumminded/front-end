import React from "react";

function SelectRequest() {
  return (
<>
  


  <div className="bg-b2 min-h-screen min-w-full" >
    <div className="2xl:mx-auto 2xl:container lg:py-16 lg:px-40 xl:px-20 md:py-12 md:px-6 py-9 px-4 bg-b2">
      
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold leading-9 text-y1">
          Select Service
        </h1>
        <p className="text-1xl leading-6 text-center text-y1 sm:w-96 md:w-9/12 lg:w-5/12 mt-4">
          If you're looking for random paragraphs, you've come to the right
          place. When a random word or a random sentence isn't quite enough
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8 md:gap-6 gap-4 lg:mt-12 md:mt-9 mt-6">
        <div className="relative flex items-center justify-center">
          <img src="https://i.ibb.co/kqt7S1z/img-1.png" alt="chair" />
          <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
            <div className="flex items-center justify-center flex-col h-full">
              <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-normal text-center text-y1">
                Calls
              </h2>
              <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="px-4 md:w-auto w-full">
              <button className="w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-y2 focus:outline-none">
                <a href="/CallForm">Select</a>
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <img src="https://i.ibb.co/w04zsMJ/img-2.png" alt="chair" />
          <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
            <div className="flex items-center justify-center flex-col h-full">
              <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-7 lg:leading-7 text-center text-y1">
                Documents
              </h2>
              <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="px-4 md:w-auto w-full">
              <button className="w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-y1 focus:outline-none">
                <a href="/DocumentForm">Select</a>
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <img src="https://i.ibb.co/3ctkDMB/img-3.png" alt="chair" />
          <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
            <div className="flex items-center justify-center flex-col h-full">
              <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold sm:w-auto leading-normal text-center text-y1">
                Translations
              </h2>
              <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="px-4 md:w-auto w-full">
              <button className="w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-y1 focus:outline-none">
               <a href="/TransaltionForm">Select</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
 );
}

export default SelectRequest;
