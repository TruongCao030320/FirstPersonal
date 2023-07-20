import React from "react";
import "../minicart/MiniCart.css";
import { UseSelector, useSelector } from "react-redux";
const MiniCart = () => {
  const toggle = useSelector((state) => state.miniCart.toggle);
  return <div className={toggle ? "mini__cart" : ""}></div>;
};

export default MiniCart;
