import React from "react";

function ProductDetails() {
  return (
    <section>
      <div class="relative mx-auto max-w-screen-xl px-4 py-8">
        <div>
          <h1 class="text-2xl font-bold lg:text-3xl">Documents Translation</h1>

          <p class="mt-1 text-sm text-gray-500">SKU: #012345</p>
        </div>

        <div class="grid gap-8 lg:grid-cols-4 lg:items-start">
          <div class="lg:col-span-3">
            <div class="relative mt-4">
              <img
                alt="Tee"
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="h-72 w-full rounded-xl object-cover lg:h-[540px]"
              />

            </div>
          </div>

          <div class="lg:sticky lg:top-0">
            <form class="space-y-4 lg:pt-8">
              <fieldset>
                <legend class="text-lg font-bold">Lenguage</legend>

                <div class="mt-2 flex gap-1">
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
                <legend class="text-lg font-bold">Type of documents</legend>

                <div class="mt-2 flex gap-1">
                  <label for="material_cotton" class="cursor-pointer">
                    <input
                      type="radio"
                      id="material_cotton"
                      name="material"
                      class="peer sr-only"
                      checked
                    />

                    <span class="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                      Bank
                    </span>
                  </label>

                  <label for="material_wool" class="cursor-pointer">
                    <input
                      type="radio"
                      id="material_wool"
                      name="material"
                      class="peer sr-only"
                      checked
                    />

                    <span class="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                      Legal
                    </span>
                  </label>
                </div>
              </fieldset>

              <div class="rounded border bg-gray-100 p-4">
                <p class="text-sm">
                  <span class="block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>

                  <a href="" class="mt-1 inline-block underline">
                    {" "}
                    Find out more{" "}
                  </a>
                </p>
              </div>

              <div>
                <p class="text-xl font-bold">$199.99/h</p>
              </div>

              <button
                type="submit"
                class="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
              >
                Add to cart
              </button>

              <button
                type="button"
                class="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
              >
                Book Now
              </button>
            </form>
          </div>

          <div class="lg:col-span-3">
            <div class="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
              <p>
                DESCRIPTION <br></br>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                ad labore nostrum, a explicabo iste est dolorem deserunt id
                ullam magni accusamus saepe, nulla sed sint reiciendis, aperiam
                cumque officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                eveniet ipsam mollitia nesciunt illo! Suscipit, corrupti!<br></br>
                <br></br>
              </p>

              <h2>ABOUT ME</h2>

              <ul>
                <li>Professional translator</li>
                <li>Details oriented</li>
                <li>Odour prevention</li>
                <li>Made from recycled materials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
