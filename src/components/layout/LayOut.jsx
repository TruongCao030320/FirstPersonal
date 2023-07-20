import React from "react";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import Routes from "../../routers/Routes";
import "../layout/LayOut.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleMiniCart } from "../../store/cartSlice";
const LayOut = () => {
  const dispatch = useDispatch();
  console.log(useSelector((state) => state.miniCart.toggle));
  const handleToggleCart = () => {
    dispatch(toggleMiniCart());
  };
  const toggle = useSelector((state) => state.miniCart.toggle);
  return (
    <div
      style={{ position: "relative" }}
      // className={toggle ? "overlay" : ""}
      // onClick={handleToggleCart}
    >
      <div className={toggle ? "overlay" : ""} onClick={handleToggleCart}></div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
};

export default LayOut;
