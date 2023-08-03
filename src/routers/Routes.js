import React from "react";
import { Routes, Route } from "react-router-dom";
import Tutorial from "../components/tutorial/Tutorial";
import Food from "../components/food/Food";
import Home from "../pages/Home";
import BigCart from "../components/bigcart/BigCart";
import Contact from "../components/contact/Contact";
import Login from "../pages/Login";
const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="foods" element={<Food />} />
      <Route path="cart" element={<BigCart />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default router;
