import React, { useState } from "react";
import Header from "../components/Header/Header";
import Tutorial from "../components/tutorial/Tutorial";
import Type from "../components/typeoffood/Type";
import WhatWeServe from "../components/whatweserve/WhatWeServe";
import Popular from "../components/popular/Popular";
import WhyTasteTreat from "../components/whytastetreat/WhyTasteTreat";
import Testimonial from "../components/testimonial/Testimonial";
import Footer from "../components/footer/Footer";
import Toast from "../components/toast/Toast";
import { useSelector } from "react-redux";

const Home = () => {
  const temp = useSelector((state) => state.toast.toggle);
  const [toast, showToast] = useState(temp);
  return (
    <div>
      {/* <Header /> */}
      {toast && <Toast />}
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
