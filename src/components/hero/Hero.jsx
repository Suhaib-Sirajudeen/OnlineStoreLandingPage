import React, { useState } from "react";
import OrangeBg from "../../assets/orangebg.png";
import { Navbar } from "../navbar/Navbar";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export const Hero = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <main className="md:px-12 md:py-6 bg-primaryDark">
      <section className="relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
        <div className="container">
          <Navbar sideBar={sideBar} setSideBar={setSideBar} />
          {/* Hero section  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center min-h-[650px]">
            {/* Text Section */}
            <div className="text-white mt-[100px] md:mt-0 p-4 space-y-4">
              <h1 className="text-3xl pl-6 md:pl-14" data-aos="fade-up">
                01 ________
              </h1>
              <h1
                className="font-bold text-5xl uppercase"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                A Healthy Friut
              </h1>
              <p className="text-sm" data-aos="fade-up" data-aos-delay="500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                sunt debitis iure minima dolor.
              </p>
              <button
                className="primary-btn"
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-offset="0"
              >
                Shop Now
              </button>
            </div>
            <div data-aos="zoom-in">
              <img
                src={OrangeBg}
                alt="Not found"
                className="relative z-10 w-[400px] img-shadow"
              />
            </div>
            {/* Blank div section */}
            <div className="md:hidden"></div>
          </div>
        </div>
        <h1
          className="large-text"
          data-aos="fade"
          data-aos-delay="600"
          data-aos-duration="1800"
        >
          Orange
        </h1>
        {/* Side bar Section */}
        {sideBar && (
          <div className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b md:rounded-r-xl from-primary to-secondary z-10">
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col w-full h-full justify-center items-center gap-6 text-white">
                {/* line */}

                <div className="w-[1px] h-[70px] bg-white"></div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaLinkedin className="text-2xl" />
                </div>

                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};
