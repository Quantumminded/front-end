import React, { useState, useEffect } from "react";
import AllLanguages from "../../AllLanguages";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import InputTag from "../Form/InputTag";
import { client } from "../../utils/client.mjs";
import useContextHook from "../../utils/customContextHook";
import toastMessage from "../notification/toastMessage";
import qs from "qs";

const PostOffer = () => {
  const [message, setMessage] = useState();
  useEffect(() => {
    if (message) toastMessage(message.type, message.message);
  }, [message]);

  const { token, user } = useContextHook();
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
    price: "",
    languages: "",
    textLanguage: "",
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
    setFormValues({
      ...formValues,
      [event.target.name]: [...formValues.languages, event.target.value],
    });
  };

  // function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    client(token)
      .post(
        "/task/create",
        // had to create a stringify version because i had trouble with render and my database
        qs.stringify({
          title: formValues.title,
          description: formValues.description,
          type: formValues.type,
          price: formValues.price,
          "languages[]": formValues.languages,
        })
      )
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
  const remove = (language) => {
    const newValues = formValues.languages.filter((item) => item !== language);
    setFormValues({
      ...formValues,
      languages: newValues,
    });
  };
  return (
    <div id="Offer" className="bg-gray-100">
      <div className="pb-12 pt-12">
        <div className="flex justify-center">
          <BreadCrumbs />
        </div>
        <form className="ml-52 mr-52" id="login" onSubmit={handleSubmit}>
          <div className="bg-white ">
            <div className="container mx-auto bg-white">
              <div className="xl:w-full border-b border-gray-300 py-5 bg-white">
                <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center ">
                  <p className="mx-auto text-lg text-gray-800 font-bold">
                    Offer
                  </p>
                  <div className="ml-2 cursor-pointer text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={16}
                      height={16}
                    >
                      <path
                        className="heroicon-ui"
                        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mx-auto">
                <div className="w-11/12 mx-auto">
                  <div className="rounded relative mt-8 h-48">
                    <img
                      src="https://www.shutterstock.com/image-vector/translator-translation-service-typographic-header-260nw-1770496304.jpg"
                      alt=""
                      className="w-full h-full px-28 object-cover rounded absolute shadow"
                    />
                    <div className="absolute bg-black opacity-0 top-0 right-0 bottom-0 left-0 rounded" />

                    <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                      <img
                        src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg"
                        alt=""
                        className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"
                      />
                      <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0" />
                      <div className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                          <line x1={16} y1={5} x2={19} y2={8} />
                        </svg>
                        <p className="text-xs text-gray-100">Edit Picture</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                    <label
                      htmlFor="title"
                      className="pb-2 text-sm font-bold text-gray-800"
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
                      className="border border-y2 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                      placeholder="I will translate Documents"
                    />
                  </div>
                  <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                    <label
                      htmlFor="about"
                      className="pb-2 text-sm font-bold text-gray-800"
                    >
                      Description
                    </label>
                    <textarea
                      value={formValues.description}
                      onChange={handleChange}
                      id="description"
                      name="description"
                      required
                      className="bg-transparent border border-y2 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500"
                      placeholder="Let the world know who you are"
                      rows={5}
                    />
                    <p className="w-full text-right text-xs pt-1 text-gray-500">
                      Character Limit: 200
                    </p>
                  </div>
                  {/* In Here */}

                  <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                    <label
                      htmlFor="type"
                      className="pb-2 text-sm font-bold text-gray-800"
                    >
                      Category
                    </label>
                    <select
                      onChange={handleChange}
                      name="type"
                      id="type"
                      className="bg-transparent border border-y2 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500"
                    >
                      <option value="call">Call</option>
                      <option value="document">Dokument</option>
                      <option value="translation">Translation</option>
                    </select>
                  </div>
                  <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                    <label
                      htmlFor="price"
                      className="pb-2 text-sm font-bold text-gray-800"
                    >
                      Price
                    </label>
                    <input
                      value={formValues.price}
                      onChange={handleChange}
                      name="price"
                      type="number"
                      className="border border-y2 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    ></input>
                  </div>
                  <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                    <label
                      htmlFor="type"
                      className="pb-2 text-sm font-bold text-gray-800"
                    >
                      Select your Languages
                    </label>
                    <AllLanguages handleLanguages={handleLanguages} />
                    <br />
                    <div className="border border-y2 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500">
                      {formValues.languages &&
                        formValues.languages.map((ele, i) => (
                          <InputTag
                            key={i}
                            index={i}
                            language={ele}
                            remove={remove}
                          />
                        ))}
                    </div>
                  </div>
                  {/* End here */}
                  <div className=" container mx-auto w-11/12 xl:w-full">
                    <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
                      <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 rounded text-indigo-600 px-6 py-2 text-xs mr-4">
                        Cancel
                      </button>
                      <button
                        className="py-3 px-6 text-b1 bg-y2 rounded-md shadow hover:bg-b3 hover:text-y2 self-center text-center font-bold "
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
};

export default PostOffer;
