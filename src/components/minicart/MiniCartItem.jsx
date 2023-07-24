import React from "react";
import "../minicart/MiniCartItem.css";
// import image from "../../assets/images/bread(1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addItem, minusItem } from "../../store/shoppingSlice";
const MiniCartItem = (props) => {
  const { id, title, price, image, quantity } = props.item;
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(
      addItem({
        id,
        title,
        price,
        image,
      })
    );
  };
  const handleMinusItem = () => {
    dispatch(minusItem(id));
  };
  return (
    <div className="miniCartItem__wrapper">
      <div>
        <img src={image} className="miniCartItem__img"></img>
      </div>
      <div className="miniCartItem__content">
        <div className="miniItemTitle">{title}</div>
        <div className="miniItemPrice">
          <div className="miniItemPrice-money">{price}$</div>

          <div className="miniItemQuantity">
            <div className="increase">
              <FontAwesomeIcon icon={faMinus} onClick={handleMinusItem} />
            </div>
            <div className="quantity">{quantity}</div>

            <div className="decrease">
              <FontAwesomeIcon icon={faPlus} onClick={handleAddItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCartItem;
