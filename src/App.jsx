import React, { useEffect } from "react";
import { Hero } from "./components/hero/Hero";
import { Services } from "./components/services/Services";
import { WheretoFind } from "./components/wheretofind/WheretoFind";
import { AppBanner } from "./components/appbanner/AppBanner";
import { Footer } from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
export const App = () => {
  useEffect(() => {}, [
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-cubic",
    }),
  ]);
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <WheretoFind />
      <AppBanner />
      <Footer />
    </main>
  );
};
