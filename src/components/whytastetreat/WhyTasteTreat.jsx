import React from "react";
import "../whytastetreat/WhyTasteTreat.css";
import image from "../../assets/images/voucher.png";
const WhyTasteTreat = () => {
  return (
    <div className="container">
      <div className="why-wrapper">
        <div className="why-logo">
          <img src={image} alt="" className="" />
        </div>
        <div className="why-content">
          <div className="why-title">
            Why <span>Tasty Treat</span>
          </div>
          <div className="why-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            voluptatem velit a quasi libero similique in deserunt esse ad
            laudantium.
          </div>
          <div className="why-list">
            <ul>
              <li>
                <div className="why-list-item">
                  <h3>Fresh and tasty foods</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta, ad?
                  </p>
                </div>
              </li>
              <li>
                <div className="why-list-item">
                  <h3>Quality support</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta, ad?
                  </p>
                </div>
              </li>
              <li>
                <div className="why-list-item">
                  <h3>Order from any location</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta, ad?
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTasteTreat;
