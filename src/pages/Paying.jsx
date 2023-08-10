import React, { useState } from "react";
import "../styles/Paying.css";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../components/toast/Toast";
import { Link } from "react-router-dom";
import { toggleToast } from "../store/toastToggleSlice";
const Paying = () => {
  const products = useSelector((state) => state.shopping.item);
  const amounts = useSelector((state) => state.shopping.totalAmount);
  const temp = useSelector((state) => state.toast.toggle);
  const [toast, setToast] = useState(temp);
  const toggle = () => {
    console.log("vao2 d9c ham toggle", temp);
    dispatch(toggleToast());
  };
  const dispatch = useDispatch();

  return (
    <div className="container">
      {temp && <Toast />}
      <div className="paying">
        <div className="paying-infor">
          <div className="infor-form">
            <div className="form-item">
              <div className="form-item-1">
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="form-item-1">
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="form-item">
              <label htmlFor="">Phone</label>
              <input type="text" placeholder="Phone number" />
            </div>
            <div className="form-item">
              <label htmlFor="">Address</label>
              <input type="text" placeholder="Address" />
            </div>
            <div className="form-item">
              <label htmlFor="">Note</label>
              <textarea placeholder="note...."></textarea>
            </div>
          </div>
          <div className="infor-btn">
            <Link to="/">
              <button onClick={() => toggle()}>Buy</button>
            </Link>
          </div>
        </div>
        <div className="paying-cost">
          <label htmlFor="">Total cost</label>
          {products.map((item) => (
            <div className="product">
              <div className="product-title">{item.title}</div>
              <span>{item.quantity}x</span>
              <div className="product-price">{item.price}$</div>
            </div>
          ))}
          <div className="totalPrice">Total price : {amounts}$</div>
        </div>
      </div>
    </div>
  );
};

export default Paying;
