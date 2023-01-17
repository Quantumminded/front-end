import React from "react";
import { Link, Outlet } from "react-router-dom";

function SelectRequest() {
  return (
    <>
      <div id="Request" className="min-h-screen min-w-full">
        <div className="2xl:mx-auto 2xl:container lg:py-16 lg:px-40 xl:px-20 xl:my-20 md:py-12 md:px-6 py-9 px-4 bg-b2 rounded-3xl ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-extrabold leading-9 text-y1">
              Select Service
            </h1>
            <p className="text-1xl leading-6 text-center text-y1 sm:w-96 md:w-9/12 lg:w-5/12 mt-4">
              Please choose the appropriate service from the options provided below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8 md:gap-6 gap-4 lg:mt-12 md:mt-9 mt-6 mb-20">
            <div className="relative flex items-center justify-center">
              <img src="https://guidable.co/wp-content/uploads/2019/07/Untitled-design-13.png" alt="chair" className="rounded-3xl min-h-full opacity-60" />
              <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
                <div className="flex items-center justify-center flex-col h-full">
                  <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-extrabold leading-normal text-center text-y2">
                    Calls
                  </h2>
                  
                </div>
                <div className="px-4 md:w-auto w-full">
                  <button className="py-3 px-10 text-b1 bg-y2 rounded-md shadow hover:bg-b3 hover:text-y2 self-center text-center font-bold border border-black hover:border-y2">
                    <Link to="call">Select</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <img src="https://thatwhitepaperguy.com/wp-content/uploads/2019/05/bigstock-E-learning-or-online-translato-146735912-1024x768.jpg" alt="chair" className="rounded-3xl min-h-full opacity-60" />
              <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
                <div className="flex items-center justify-center flex-col h-full">
                  <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-extrabold leading-7 lg:leading-7 text-center text-y2">
                    Documents
                  </h2>
                  
                </div>
                <div className="px-4 md:w-auto w-full">
                  <button className="py-3 px-10 text-b1 bg-y2 rounded-md shadow hover:bg-b3 hover:text-y2 self-center text-center font-bold border border-black hover:border-y2">
                    <Link to="document">Select</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center ">
              <img src="https://images.idgesg.net/images/article/2022/04/translation-software-cybrain-shutterstock-100925209-large.jpg?auto=webp&quality=85,70" alt="chair" className="rounded-3xl min-h-full opacity-60" />
              <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
                <div className="flex items-center justify-center flex-col h-full">
                  <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-extrabold sm:w-auto leading-normal text-center text-y2">
                    Translations
                  </h2>
                  
                </div>
                <div className="px-4 md:w-auto w-full">
                  <button className="py-3 px-10 text-b1 bg-y2 rounded-md shadow hover:bg-b3 hover:text-y2 self-center text-center font-bold border border-black hover:border-y2">
                    <Link to="translation">Select</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default SelectRequest;
