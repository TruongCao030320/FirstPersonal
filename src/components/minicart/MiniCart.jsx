import React, { useEffect, useState } from "react";
import "../minicart/MiniCart.css";
import { UseSelector, useSelector } from "react-redux";
import MiniCartItem from "./MiniCartItem";
const MiniCart = () => {
  const toggle = useSelector((state) => state.miniCart.toggle);
  const item = useSelector((state) => state.shopping.item);
  const quantity = useSelector((state) => state.shopping.quantity);

  return (
    <div className={toggle ? "mini__cart" : ""}>
      {toggle ? (
        <div style={{}} className="mini__cart-scroll">
          {item.map((item) => (
            <MiniCartItem key={item.id} item={item} />
          ))}
          <div className="mini__cart-scroll-bottom">
            Total quantity: {quantity}
          </div>
          <div className="miniCart-checkout-btn">Check out</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MiniCart;
