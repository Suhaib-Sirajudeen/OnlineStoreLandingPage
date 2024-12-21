import React from "react";
import AppBannerBg from "../../assets/banner.jpg";
import AppStore from "../../assets/app_store.png";
import PlayStore from "../../assets/play_store.png";

const BannerStyle = {
  backgroundImage: `url(${AppBannerBg})`,
  backgroundPosition: "Center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};
export const AppBanner = () => {
  return (
    <>
      <div className="container my-14">
        <div
          style={BannerStyle}
          className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
        >
          <div>
            <div className="space-y-6 max-w-xl mx-auto">
              <h1
                className="text-2xl text-center sm:text-4xl font-semibold"
                data-aos="fade-up"
              >
                Download the app
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-center sm:px-20"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                perferendis adipisci!
              </p>
              <div
                className="flex justify-center items-center gap-4"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <a href="#">
                  <img
                    src={PlayStore}
                    alt="Not found"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={AppStore}
                    alt="Not found"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
