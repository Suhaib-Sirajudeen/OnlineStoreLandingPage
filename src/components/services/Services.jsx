import React from "react";
import Fruits1 from "../../assets/Fruits/fruits1.webp";
import Fruits2 from "../../assets/Fruits/fruits2.png";
import Fruits3 from "../../assets/Fruits/fruits3.png";

export const Services = () => {
  const ServicesData = [
    {
      id: 1,
      image: Fruits1,
      title: "Fresh Fruits",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      aosDelay: "300",
    },
    {
      id: 2,
      image: Fruits2,
      title: "Fresh Fruits",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      aosDelay: "300",
    },
    {
      id: 3,
      image: Fruits3,
      title: "Orange Juice",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      aosDelay: "300",
    },
  ];
  return (
    <div className=" container my-16 space-y-4">
      {/* Header Section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <h1 className="text-3xl font-bold text-dark" data-aos="fade-up">
          Fresh and <span className="text-primary">Tasty Fruits</span>
        </h1>
        <p
          className=" text-sm opacity-50"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel
          illum doloribus maxime soluta! Laboriosam facilis saepe nostrum
          perferendis adipisci!
        </p>
      </div>
      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {ServicesData.map(({ id, image, title, subtitle, aosDelay }) => {
          return (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay={aosDelay}
              className="text-center p-4 space-y-6"
            >
              <img
                src={image}
                alt={title}
                className="max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow2"
              />
              <div className="space-y-2">
                <h1 className="text-primary font-bold text-2xl">{title}</h1>
                <p className="text-gray">{subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
