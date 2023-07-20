import React from "react";
import "../../components/whatweserve/WhatWeServe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faBowlRice,
  faBus,
  faCableCar,
  faFireBurner,
  faMagic,
  faMoped,
} from "@fortawesome/free-solid-svg-icons";
const WhatWeServe = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="wws__title">
          <h4 style={{ color: "red" }}>What we serve</h4>
          <h1
            style={{
              width: "50%",
              textAlign: "center",
            }}
          >
            Just sit back at home we will{" "}
            <span style={{ color: "red" }}>take care</span>
          </h1>
          <div className="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            quisquam nihil voluptatibus alias dolorem explicabo modi quas
            recusandae illo animi.
          </div>
        </div>
        <div className="features">
          <div className="features__item">
            <FontAwesomeIcon icon={faBus} className="features-icon" />
            <div className="features-title">Quick delivery</div>
            <p className="features-paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda, odio.
            </p>
          </div>
          <div className="features__item">
            <FontAwesomeIcon icon={faBowlFood} className="features-icon" />
            <div className="features-title">Quick delivery</div>
            <p className="features-paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda, odio.
            </p>
          </div>
          <div className="features__item">
            <FontAwesomeIcon icon={faFireBurner} className="features-icon" />
            <div className="features-title">Quick delivery</div>
            <p className="features-paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda, odio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeServe;
