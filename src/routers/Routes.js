import React from "react";
import { Routes, Route } from "react-router-dom";
import Tutorial from "../components/tutorial/Tutorial";
import Food from "../components/food/Food";
import Home from "../pages/Home";
import BigCart from "../components/bigcart/BigCart";
import Contact from "../components/contact/Contact";
import Login from "../pages/Login";
import Paying from "../pages/Paying";
import Toast from "../components/toast/Toast";
const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="foods" element={<Food />} />
      <Route path="cart" element={<BigCart />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="paying" element={<Paying />} />
    </Routes>
  );
};

export default router;
