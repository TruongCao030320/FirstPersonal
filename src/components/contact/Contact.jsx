import React from "react";
import "../contact/Contact.css";
const Contact = () => {
  return (
    <div className="container">
      <div className="contact-form">
        <div className="contact-wrapper">
          <h2>Contact form</h2>
          <div className="contact-item">
            <label htmlFor="">Email</label>
            <input />
          </div>
          <div className="contact-item">
            <label htmlFor="">Password</label>
            <input />
          </div>
          <div className="contact-item">
            <label htmlFor="">Phone number</label>
            <input />
          </div>
          <div className="contact-item">
            <label htmlFor="">Feedback</label>
            <textarea />
          </div>
          <div className="contact-item">
            <button className="button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
