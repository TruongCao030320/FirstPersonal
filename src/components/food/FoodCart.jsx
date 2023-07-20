import React from "react";
import "../food/FoodCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const FoodCart = (props) => {
  const { foodItem } = props;
  return (
    <div className="food__menu">
      <div key={foodItem.id} className="food__menu__item">
        <div className="item__content">
          <div className="item__title">{foodItem.title}</div>
          <div
            className="item-bottom"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="item-bottom-cost">
              <div className="item__desc">{foodItem.category}</div>
              <div className="item__cost">{foodItem.price} $</div>
            </div>
            <div className="item-bottom-buy">
              <FontAwesomeIcon
                icon={faCartShopping}
                color="white"
                style={{ marginLeft: 10, cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
        <img
          src={foodItem.image01}
          className="item__image"
          width={100}
          height={100}
          style={{
            borderRadius: 50,
          }}
        ></img>
      </div>
    </div>
  );
};

export default FoodCart;
