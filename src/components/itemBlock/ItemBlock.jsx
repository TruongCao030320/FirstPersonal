import React from "react";
import "../itemBlock/ItemBlock.css";
import image from "../../assets/images/hero.jpg";
const ItemBlock = (props) => {
  const { image, name, cost } = props;
  return (
    <div className="item__block">
      <div className="item__image-block">
        <img
          src={image}
          alt=""
          width="120"
          height="120"
          className="item__image-block-hover"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="item__name">{name}</div>
      <div className="addToCart">
        <div className="addToCart__money">{cost}$</div>
        <button className="addToCart__btn">Add to cart</button>
      </div>
    </div>
  );
};

export default ItemBlock;
