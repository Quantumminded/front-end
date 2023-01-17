import { Stepper } from "./Components/Order/Stepper.jsx";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { languages } from "./languages.jsx";
import { client } from "./utils/client.mjs";
import useContextHook from "./utils/customContextHook";
import toast from "./Components/notification/toastMessage.js";

function Checkout() {
  const { token } = useContextHook();
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const [fetchData, setFetchData] = useState();
  //Inputs
  const [formValues, setFormValues] = useState({
    time: "",
    date: "",
    details: "",
  });
  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }
  const fetchTask = async () => {
    try {
      const { data } = await client(token).get(`/api/task/all/${id}`);
      setFetchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  /* Finds the and compare the languages and get the name for the ISO Code */
  const findLanguageName = (fetchedLanguages) => {
    //if only 1 language is presented return singleLanguage
    if (fetchedLanguages.length <= 1) {
      const singleLanguage = languages.find(
        (ele) => ele.code == fetchedLanguages
      );
      return singleLanguage;
    }
    // if more languages return findings
    const findings = fetchedLanguages.map((lang) =>
      languages.find((ele) => ele.code == lang)
    );
    return findings;
  };
  async function doAccept() {
    try {
      const { data } = await client(token).post(`/task/accepted/${id}`, {
        ...formValues,
      });
      setMessage(data);
      setTimeout(() => (window.location.href = "/messages"), 2000);
    } catch (error) {
      setMessage(error.response.data);
    }
  }
  useEffect(() => {
    fetchTask();
  }, [id]);

  // Notification toast takes type and message from the response
  const [message, setMessage] = useState();
  useEffect(() => {
    if (message) toast(message.type, message.message);
  }, [message]);
  if (fetchData)
    return (
      <>
        <div>
          <div
            className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
            id="chec-div"
          >
            <div
              className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
              id="checkout"
            >
              <div className="flex md:flex-row flex-col justify-end" id="cart">
                <div
                  className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                  id="scroll"
                >
                  <div
                    className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                    onClick={() => setShow(!show)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-left"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <button
                      onClick={() => window.history.back()}
                      className="text-sm pl-2 leading-none"
                    >
                      Back
                    </button>
                  </div>

                  <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
                    Order
                  </p>
                  {/* Product cards */}
                  <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                    <div className="w-1/4">
                      <img
                        src={"https://picsum.photos/400/300"}
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      {/* <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                        {fetchData[0].id}
                      </p> */}
                      <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">
                          {fetchData[0].title}
                        </p>
                        {/* <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                        <option>x1</option>
                        <option>x2</option>
                        <option>x3</option>
                      </select> */}
                      </div>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Languages:
                        {/* Finds the and compare the languages and get the name for the ISO Code */}
                        {findLanguageName(fetchData[0].languages).map(
                          (lang) => ` ${lang.name} `
                        )}
                        to{" "}
                        {findLanguageName(fetchData[0].user_language).name ||
                          navigator.language}
                      </p>
                      <p className="text-xs leading-3 text-gray-600 py-4">
                        {fetchData[0].type}
                      </p>
                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex itemms-center">
                          <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                            Add to favorites
                          </p>
                          <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                            Remove
                          </p>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800">
                          {fetchData[0].price}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Product card 2 */}
                  {/* <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                  <div className="w-1/4">
                    <img
                      src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png"
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="md:pl-3 md:w-3/4">
                    <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                      RF293
                    </p>
                    <div className="flex items-center justify-between w-full pt-1">
                      <p className="text-base font-black leading-none text-gray-800">
                        Documentation Translation
                      </p>
                      <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                        <option>x1</option>
                        <option>x2</option>
                        <option>x3</option>
                      </select>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 pt-2">
                      Language: German to Italian
                    </p>
                    <p className="text-xs leading-3 text-gray-600 py-4">
                      Document Type: Anmeldung formular
                    </p>
                    <p className="w-96 text-xs leading-3 text-gray-600">
                      Date: Open ends
                    </p>
                    <div className="flex items-center justify-between pt-5 pr-6">
                      <div className="flex itemms-center">
                        <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                          Add to favorites
                        </p>
                        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                          Remove
                        </p>
                      </div>
                      <p className="text-base font-black leading-none text-gray-800">
                        $200
                      </p>
                    </div>
                  </div>
                </div> */}
                </div>

                {/* Summary section  */}
                <div className="xl:w-1/2 md:w-1/3  w-full bg-gray-100 h-full">
                  <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                    <div>
                      <p className="text-4xl font-black leading-9 text-gray-800">
                        Provide some Information
                      </p>

                      <div className="flex items-center justify-between  pt-16">
                        <div className="">
                          {/* Task Provider */}
                          <div class="flex items-center space-x-4 pb-4">
                            <img
                              class="w-10 h-10 rounded-full"
                              src={fetchData[0].image}
                              alt=""
                            />
                            <div class="font-medium dark:text-white">
                              <div>{`${fetchData[0].firstname} ${fetchData[0].lastname}`}</div>
                              <div class="text-sm text-gray-500 dark:text-gray-400">
                                Joined in August 2014
                              </div>
                            </div>
                          </div>
                          {/* Task Provider */}
                          {/* TEXTBOx */}
                          <div className="mb-3 xl:w-96">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label inline-block mb-2 text-gray-700"
                            >
                              Describe your Task
                            </label>
                            <textarea
                              name="details"
                              value={formValues.details}
                              onChange={handleChange}
                              className="
                                  form-control
                                  block
                                  w-full
                                  px-3
                                  py-1.5
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                              id="exampleFormControlTextarea1"
                              rows="3"
                              placeholder="Your message"
                            ></textarea>
                            <p className="w-96 text-xs leading-3 text-gray-600 py-2">
                              Please select due Date:
                            </p>
                            <div className="flex gap-2 justify-between">
                              <input
                                value={formValues.time}
                                type={"time"}
                                name="time"
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              />
                              <input
                                value={formValues.date}
                                type={"date"}
                                name="date"
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="select time"
                              />
                            </div>
                          </div>
                        </div>
                        {/* TEXTBOx */}
                        <Stepper formValues={formValues} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                        <p className="text-2xl leading-normal text-gray-800">
                          Total
                        </p>
                        <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                          {fetchData[0].price}
                        </p>
                      </div>
                      <button
                        onClick={doAccept}
                        className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>
          {` /* width */
                    #scroll::-webkit-scrollbar {
                        width: 1px;
                    }
    
                    /* Track */
                    #scroll::-webkit-scrollbar-track {
                        background: #f1f1f1;
                    }
    
                    /* Handle */
                    #scroll::-webkit-scrollbar-thumb {
                        background: rgb(133, 132, 132);
                    }
    `}
        </style>
      </>
    );

  return (
    <>
      <div className="text-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default Checkout;
