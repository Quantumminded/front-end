import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookNow from "../Payment/BookNow";

function ProductDetails() {
  let { id } = useParams();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_FETCH}/api/task/all/${id}`
        );
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCards();
  }, [id]);

  console.log(cards[0]);
  return (
    <section key={id}>
      {cards[0] && (
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <h1 className="text-2xl font-bold lg:text-3xl">{cards[0].title}</h1>

            <p className="mt-1 text-sm text-gray-500">ID: #000{cards[0].id}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div className="lg:col-span-3">
              <div className="relative mt-4">
                <img
                  alt="Tee"
                  src="https://picsum.photos/400/300"
                  className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                />
              </div>
            </div>

            <div className="lg:sticky lg:top-0">
              <form className="space-y-4 lg:pt-8">
                <fieldset>
                  <legend className="text-lg font-bold">Language</legend>

                  <div className="mt-2 flex gap-1">
                    {/* FLEGs map based on language  */}
                    {cards[0].languages.map((language) => (
                      <img
                        key={language}
                        className="p-2"
                        src={`https://flagcdn.com/24x18/${language.toLowerCase()}.png`}
                        alt={language}
                      />
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-lg font-bold">Type of service</legend>

                  <div className="mt-2 flex gap-1">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        id="material_cotton"
                        name="material"
                        className="peer sr-only"
                      />

                      <span className="block rounded-full border border-gray-200 px-3 py-1 text-xs bg-y2 text-b2 ">
                        {cards[0].type}
                      </span>
                    </label>
                  </div>
                </fieldset>

                <div className="rounded-2xl border bg-b2 p-4">
                  {/* PROFILE PIC */}
                  <div className="avatar mb-3 flex justify-center">
                    <div className="w-16 rounded-full">
                      <img src={cards[0].image} alt="profile img" />
                    </div>
                  </div>
                  <h6 className="text-center text-y2">About me</h6>
                  <p className="text-sm text-white">
                    <span className="block">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </span>

                    <Link to="/" className="mt-1 inline-block underline">
                      {" "}
                      Find out more{" "}
                    </Link>
                  </p>
                </div>

                <div>
                  <h5 className="text-lg font-bold">Price</h5>
                  <p className="text-xl font-bold">{cards[0].price}</p>
                </div>

                {/* Checkoutbutton */}
                <div>
                  <Link>
                    <BookNow />
                  </Link>
                </div>
                {/* <BookNow card={ cards } /> */}
              </form>
            </div>

            <div className="lg:col-span-3">
              <div className="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
                <h5 className="text-lg font-bold">DESCRIPTION</h5>
                <p>
                  {cards[0].description}
                  <br></br>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductDetails;
