import React from "react";
import { Outlet } from "react-router";
import SelectionCard from "./Components/Select/SelectionCard";

function Select() {
  return (
    <>
      <div className="min-h-screen min-w-full">
        <div className="2xl:mx-auto 2xl:container lg:py-16 lg:px-40 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-extrabold leading-9 text-y2">
              Select Service
            </h1>
            <p className="text-1xl leading-6 text-center font-bold text-b2 sm:w-96 md:w-9/12 lg:w-5/12 mt-4 p-3">
            We are here to assist you with all your language needs. Whether you are looking to request a translation or offer your own translation services, we have got you covered. Please select from the options below to proceed:
            </p>
          </div>

          <div className="rounded-3xl  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-8 md:gap-6 gap-4 lg:mt-12 md:mt-9 mt-6">
            {/* //Selection cards take type description path and image as props */}
            <SelectionCard
              type={"Request"}
              path={"Request"}
              image="https://cdn.windowsreport.com/wp-content/uploads/2020/03/best-offline-translation-software-for-Windows-10-1200x675.jpg"
            />
            <SelectionCard
              type={"Offer"}
              path={"Offer"}
              image="https://images.idgesg.net/images/article/2022/04/translation-software-cybrain-shutterstock-100925209-large.jpg?auto=webp&quality=85,70"
            />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Select;
