import React from "react";
import "../tutorial/Tutorial.css";
import image from "../../assets/images/hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faShield } from "@fortawesome/free-solid-svg-icons";
const Tutorial = () => {
  return (
    <div className="container" style={{ display: "flex", marginTop: 50 }}>
      <div className="slogan">
        <h4>Easy way to make order</h4>
        <h1>
          <span>HUNGRY ?</span> Just wait food at your door
        </h1>
        <p className="des">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
          deleniti quidem dignissimos tempora cupiditate? Dolore.
        </p>
        <div className="btnbar">
          <button className="btnbar__order button">Order Now</button>
          <button className="btnbar__seeAllFood button">See All Food</button>
        </div>
        <div className="commit">
          <div className="commit__item">
            <FontAwesomeIcon icon={faCar} className="commit__icon" />
            <span className="commit__span">No shipping charge</span>
          </div>
          <div className="commit__item">
            <FontAwesomeIcon icon={faShield} className="commit__icon" />
            <span className="commit__span">100% secure checkout</span>
          </div>
        </div>
      </div>
      <div className="image__hero">
        <img src={image}></img>
      </div>
    </div>
  );
};

export default Tutorial;
