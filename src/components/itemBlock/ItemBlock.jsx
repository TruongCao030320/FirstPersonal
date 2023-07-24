import React from "react";
import "../itemBlock/ItemBlock.css";
import image from "../../assets/images/hero.jpg";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/shoppingSlice";
const ItemBlock = (props) => {
  const dispatch = useDispatch();
  const { id, image, title, price } = props.item;

  const handleAddItem = () => {
    dispatch(
      addItem({
        id,
        title,
        price,
        image,
      })
    );
    console.log("props", props);
  };
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
      <div className="item__name">{title}</div>
      <div className="addToCart">
        <div className="addToCart__money">{price}$</div>
        <button className="addToCart__btn" onClick={handleAddItem}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemBlock;
