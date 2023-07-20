import React from "react";
import "../footer/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faFacebook } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="time">
        <div>Delivery Time</div>
        <div className="thu">Sunday - Thursday</div>
        <div className="thu">10:00am - 11hpm</div>
        <div className="thu">Friday - Saturday</div>
        <div className="thu">Off day</div>
      </div>
      <div className="contact">
        <div className="location">Contact</div>
        <div className="location">Location :Tinh Lo 8 ,Mui Lon 1, Cu Chi</div>
        <div className="location">Phone:012.345.6789</div>
        <div className="location">Email:personal@gmail.com</div>
      </div>
      <div className="newsletter">
        <div>Newsletter</div>
        <p>Subscibe our newsletter</p>
        <div className="newsletter__input">
          <input placeholder="Enter your email" />
          <span>
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
