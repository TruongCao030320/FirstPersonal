import React, { useRef, useEffect } from "react";
import logo from "../../assets/images/Food-Logo-Graphics-1-71-580x386.jpg";
import "../Header/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faClose,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import MiniCart from "../minicart/MiniCart";
import { useDispatch } from "react-redux";
import { toggleMiniCart } from "../../store/cartSlice";
import { toggleNavbarMobile } from "../../store/mobileSlice";
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
  console.log(
    "mobile",
    useSelector((state) => state.mobile.mobile)
  );
  const dispatch = useDispatch();
  const handleToggleCart = () => {
    dispatch(toggleMiniCart());
  };
  const handleToggleNavbarMobile = () => {
    console.log("vào đc kh");
    dispatch(toggleNavbarMobile());
  };
  const navbarMobile = useSelector((state) => state.mobile.mobile);
  const quantity = useSelector((state) => state.shopping.quantity);
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
            <div className="number">{quantity}</div>
            <MiniCart />
          </div>
        </div>
      </div>
      <div
        className={navbarMobile ? "overlay-mobile" : ""}
        onClick={handleToggleNavbarMobile}
      ></div>
      <div className="cart__icon-mobile">
        <div
          className={navbarMobile ? "navbar-mobile-active" : "navbar-mobile"}
        >
          <div className="navbar__list-mobile ">
            {array.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                href=""
                className="navlink__mobile"
              >
                <span className="navbar__title">{item.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
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
        <div className="cart__icon-cart">
          <FontAwesomeIcon
            icon={faBars}
            className="icon"
            onClick={handleToggleNavbarMobile}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
