import React from "react";
import "../typeoffood/Type.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faBurger,
  faPizzaSlice,
  faMeat,
  faSteak,
  faDrum,
} from "@fortawesome/free-solid-svg-icons";
const Type = () => {
  const array = [
    {
      icon: faBurger,
      title: "Fast Food",
    },
    {
      icon: faPizzaSlice,
      title: "Pizza",
    },
    {
      icon: faBowlFood,
      title: "Asian Food",
    },
    {
      icon: faDrum,
      title: "Soup",
    },
  ];
  return (
    <div className="container">
      <div className="type">
        {array.map((item, index) => (
          <div className="type__item">
            <div className="type__icon">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <span className="type__title">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Type;
