import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
  let { id } = useParams();
  // Use the `id` parameter to make a request to the API to retrieve the product details
  // useEffect(() => {
  //   async function fetchProduct() {
  //     let response = await fetch(`https://super-secret-backend.onrender.com/api/task/all/${id}`);
  //     let product = await response.json();
  //     console.log(product); // Log the product details to the console
  //   }
  //   fetchProduct();
  // }, [id]); // Only refetch the product when the `id` parameter changes

  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch(`https://super-secret-backend.onrender.com/api/task/all/${id}`);
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCards();
  }, [id]);

  console.log(cards)
  return (
    <section key={id}>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div>
          <h1 className="text-2xl font-bold lg:text-3xl">Documents Translation</h1>

          <p className="mt-1 text-sm text-gray-500">SKU: #000{}</p>
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
                  <img
                    className="p-2"
                    src="https://flagcdn.com/24x18/de.png"
                    alt="language"
                  />
                  <img
                    className="p-2"
                    src="https://flagcdn.com/24x18/it.png"
                    alt="language"
                  />
                  <img
                    className="p-2"
                    src="https://flagcdn.com/24x18/gb-eng.png"
                    alt="language"
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-lg font-bold">Type of documents</legend>

                <div className="mt-2 flex gap-1">
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      id="material_cotton"
                      name="material"
                      className="peer sr-only"
                      
                    />

                    <span className="block rounded-full border border-gray-200 px-3 py-1 text-xs ">
                    1215
                    </span>
                  </label>

                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      id="material_wool"
                      name="material"
                      className="peer sr-only"
                      
                    />

                    <span className="block rounded-full border border-gray-200 px-3 py-1 text-xs ">
                      Legal
                    </span>
                  </label>
                </div>
              </fieldset>

              <div className="rounded border bg-gray-100 p-4">
                {/* PROFILE PIC */}
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt='profile img' />
                  </div>
                </div>
                <p className="text-sm">
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
                <p className="text-xl font-bold">$199.99/h</p>
              </div>

              <Link to="/Checkout">
                <button
                  type="button"
                  className="w-full mt-5 rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
                >
                  Book Now
                </button>
              </Link>
            </form>
          </div>

          <div className="lg:col-span-3">
            <div className="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
              <p>
                DESCRIPTION <br></br>
                As a freelancer, I offer professional document translation
                services in Italian, German, and English. With my expertise in
                language translation, I can accurately and effectively translate
                a variety of documents, including legal documents, business
                documents, and personal documents. I pride myself on delivering
                high-quality translations that accurately convey the intended
                meaning of the original document, and I am dedicated to
                providing excellent customer service to ensure the complete
                satisfaction of my clients. Whether you need a simple letter
                translated or a complex legal document, I have the skills and
                experience to handle your translation needs.<br></br>
                <br></br>
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
