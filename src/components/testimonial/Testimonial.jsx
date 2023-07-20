import React from "react";
import Slider from "react-slick";
import "../testimonial/Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/p1.png";
import image2 from "../../assets/images/p2.png";
import image3 from "../../assets/images/p3.png";
import network from "../../assets/images/network.png";
const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <div className="testimonial__wrapper">
        <div className="testimonial__content">
          <h5 className="testimonial__name" style={{ color: "red" }}>
            Testimonial
          </h5>
          <h2>
            What our{" "}
            <span
              style={{
                color: "red",
              }}
            >
              customer
            </span>{" "}
            saying
          </h2>
          <p style={{ fontSize: ".8rem", color: "#ccc" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            sequi!
          </p>
          <Slider {...settings} className="slider">
            <div className="slider__item">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto ullam, eum reprehenderit neque reiciendis tempora
                eveniet tenetur non facilis suscipit?
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={image1} className="testimonial__img" />
                <span>Micheal</span>
              </div>
            </div>
            <div className="slider__item">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto ullam, eum reprehenderit neque reiciendis tempora
                eveniet tenetur non facilis suscipit?
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={image2} className="testimonial__img" />
                <span>Rachel</span>
              </div>
            </div>
            <div className="slider__item">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto ullam, eum reprehenderit neque reiciendis tempora
                eveniet tenetur non facilis suscipit?
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={image3} className="testimonial__img" />
                <span>Lucifer</span>
              </div>
            </div>
          </Slider>
        </div>
        <div className="testimonial__network">
          <img src={network} className="w-100"></img>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
