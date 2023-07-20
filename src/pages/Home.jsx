import React from "react";
import Header from "../components/Header/Header";
import Tutorial from "../components/tutorial/Tutorial";
import Type from "../components/typeoffood/Type";
import WhatWeServe from "../components/whatweserve/WhatWeServe";
import Popular from "../components/popular/Popular";
import WhyTasteTreat from "../components/whytastetreat/WhyTasteTreat";
import Testimonial from "../components/testimonial/Testimonial";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Tutorial />
      <Type />
      <WhatWeServe />
      <Popular />
      <WhyTasteTreat />
      <Testimonial />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
