import React, { useState, useEffect } from "react";
import AllLanguages from "./AllLanguages";
import BreadCrumbs from "./Components/BreadCrumbs/BreadCrumbs";
import InputTag from "./Components/Form/InputTag";
import { client } from "./utils/client.mjs";
import useContextHook from "./utils/customContextHook";
import toastMessage from "./Components/notification/toastMessage";
import { Type } from "./Type";
import { useParams } from "react-router";
//TODO: Create PostRequest
export default function PostRequest() {
  const [message, setMessage] = useState();
  const { type } = useParams();

  //Notification
  useEffect(() => {
    if (message) toastMessage(message.type, message.message);
  }, [message]);

  const { token } = useContextHook();
  // let form = useRef(null);
  //   const handleSubmit = (event) => {
  //       event.preventDefault();
  //       const form_data = new FormData(form.current);
  //       let payload = {};
  //       form_data.forEach(function (value, key) {
  //           payload[key] = value;
  //       });
  //       // console.log("payload", payload);
  //       // Place your API call here to submit your payload.
  //   };

  // useState hook to store form values
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    type: "",
    fromLanguage: "",
    toLanguage: "",
    dueDate: "",
    dueTime: "",
  });

  // function to handle input changes
  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  //function for handleling multiple language selections
  const handleLanguages = (event) => {
    console.log(event.target.name);
    setFormValues({
      ...formValues,
      [event.target.name]: [
        event.target.value,
      ],
    });
  };

  // function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    client(token)
      .post("/request/create", { ...formValues })
      .then((response) => {
        setMessage(response.data);
        console.log(response);
      })
      .catch((err) => {
        setMessage(err.response.data);
        console.log(err);
      });
    // submit form values to API or somewhere else
  };
  return (
    <div id="PostRequest" className="bg-b2">
      <div className="pb-12 pt-12">
        <div className="flex justify-center">
          <BreadCrumbs />
        </div>
        <form className=" ml-52 mr-52" id="login" onSubmit={handleSubmit}>
          <div className="bg-white dark:bg-gray-800">
            <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
              {/* TOPSECTION  START */}
              <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
                <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                  <p className="mx-auto text-lg text-gray-800 dark:text-gray-100 font-bold">
                    Request for {type}
                  </p>
                </div>
              </div>
              {/* TOPSECTION  End */}
              <div className="mx-auto">
                <div className="w-11/12 mx-auto ">
                  {/* ProfileBanner */}
                  {/* ProfileBanner End */}

                  {/* InputFields */}
                  <div className="flex flex-col items-end">
                    {/* Title */}
                    <div className="mt-16 flex flex-col xl:w-3/6 lg:w-1/2 md:w-1/2 w-full">
                      <label
                        htmlFor="title"
                        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                      >
                        Titel
                      </label>
                      <input
                        value={formValues.title}
                        onChange={handleChange}
                        type="text"
                        id="title"
                        name="title"
                        required
                        className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                        placeholder="I will translate Documents"
                      />
                    </div>
                    {/* Title End */}

                    {/* Description */}
                    <div className="mt-8 flex flex-col xl:w-3/6 lg:w-1/2 md:w-1/2 w-full">
                      <label
                        htmlFor="about"
                        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                      >
                        Description
                      </label>
                      <textarea
                        value={formValues.description}
                        onChange={handleChange}
                        id="description"
                        name="description"
                        required
                        className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
                        placeholder="Let the world know who you are"
                        rows={5}
                      />
                      <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">
                        Character Limit: 200
                      </p>
                    </div>
                    {/* DescriptionEnd */}
                    {/* Date & TIme */}
                    <div className="flex w-full justify-end">
                      <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full items-end">
                        <label
                          htmlFor="dueDate"
                          className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                        >
                          Due to when ?
                        </label>
                        <input
                          onChange={handleChange}
                          name="dueDate"
                          id="dueDate"
                          type="date"
                          className="w-1/2 bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
                          placeholder="Select date"
                        />
                      </div>
                      <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full items-end">
                        <label
                          htmlFor="dueDate"
                          className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                        >
                          Time
                        </label>
                        <input
                          onChange={handleChange}
                          name="dueTime"
                          id="dueTime"
                          type="time"
                          className="w-1/2 bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
                          placeholder="Select Time"
                        />
                      </div>
                    </div>
                    {/* Date & TIme End */}
                    {/* Category */}
                    <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                      {/* type == document/call/translation */}
                      <Type handleChange={handleChange} type={type} />
                    </div>
                    {/* Category End*/}

                    {/* Price */}
                    <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                      <label
                        htmlFor="price"
                        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                      >
                        Price
                      </label>
                      <input
                        value={formValues.price}
                        onChange={handleChange}
                        name="price"
                        type="number"
                        className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                      ></input>
                    </div>
                    {/* Price End */}

                    {/* languages */}
                    <div className="mt-16 flex gap-5 xl:w-3/6 lg:w-1/2 md:w-1/2 w-full">
                      <div>
                        <label
                          htmlFor="type"
                          className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                        >
                          From:
                        </label>
                        <AllLanguages
                          name={"fromLanguage"}
                          handleLanguages={handleLanguages}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="type"
                          className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                        >
                          To:
                        </label>
                        <AllLanguages
                          name={"toLanguage"}
                          handleLanguages={handleLanguages}
                        />
                      </div>
                    </div>
                    {/* languages End */}

                    {/* InputFields End*/}
                  </div>
                  <div className=" container mx-auto w-11/12 xl:w-full">
                    <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
                      <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4">
                        Cancel
                      </button>
                      <button
                        className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm"
                        type="submit"
                      >
                        Publish
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
