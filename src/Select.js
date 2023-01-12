import React from "react";
import { Outlet } from "react-router";
import SelectionCard from "./Components/Select/SelectionCard";

function Select() {
  return (
    <>
      <div className="bg-b2 min-h-screen min-w-full">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-8 md:gap-6 gap-4 lg:mt-12 md:mt-9 mt-6">
            {/* //Selection cards take type description path and image as props */}
            <SelectionCard
              type={"Request"}
              path={"Request"}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_from_a_camera.jpg/1200px-Black_from_a_camera.jpg"
            />
            <SelectionCard
              type={"Offer"}
              path={"Offer"}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_from_a_camera.jpg/1200px-Black_from_a_camera.jpg"
            />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Select;
