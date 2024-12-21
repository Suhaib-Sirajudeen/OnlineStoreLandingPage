import React from "react";
import WorldMap from "../../assets/world-map.png";

export const WheretoFind = () => {
  return (
    <>
      <div className="container my-36">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
          {/* Text Section */}
          <div className="space-y-8">
            <h1
              className="font-bold font-serif text-4xl text-dark"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Where to buy our products?
            </h1>
            <div
              className=" flex items-center gap-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <input
                type="text"
                placeholder="country"
                className="input-style w-full lg:w-[120px]"
              />
              <input
                type="text"
                placeholder="Zipcode"
                className="input-style w-full"
              />
            </div>
            <button
              className="secondary-btn"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              Search
            </button>
          </div>
          {/* Map section */}
          <div className=" col-span-2" data-aos="fade">
            <img
              src={WorldMap}
              alt="Not found"
              className="w-full sm:w-[500px] mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};
