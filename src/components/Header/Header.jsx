import React from "react";
import logo from "../../assets/images/Food-Logo-Graphics-1-71-580x386.jpg";
import "../Header/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import MiniCart from "../minicart/MiniCart";
import { useDispatch } from "react-redux";
import { toggleMiniCart } from "../../store/cartSlice";
import { useSelector } from "react-redux";
const Header = () => {
  const array = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Food",
      path: "/foods",
    },
    {
      title: "Cart",
      path: "/cart",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  const dispatch = useDispatch();
  console.log(useSelector((state) => state.miniCart.toggle));
  const handleToggleCart = () => {
    dispatch(toggleMiniCart());
  };
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={logo} className="logo__img"></img>
          <div className="restaurant-name">Personal</div>
        </div>
        <div className="navbar">
          <div className="navbar__list">
            {array.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                href=""
                className={(nav) => (nav.isActive ? "active" : "")}
              >
                <span className="navbar__title">{item.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="cart__icon">
          <div className="cart__icon-user">
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
          <div className="cart__icon-cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="icon toggle"
              onClick={handleToggleCart}
            />
            <div className="number">2</div>
            <MiniCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
