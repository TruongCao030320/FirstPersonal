import React from "react";
import "../popular/Popular.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBreadSlice,
  faBurger,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";
import ItemBlock from "../itemBlock/ItemBlock";
import products from "../../assets/fake-data/products";
import { Container, Row, Col } from "react-bootstrap";
const Popular = () => {
  return (
    <div className="container">
      <div className="popular">
        <div className="popular-title">
          <h1>Popular Foods</h1>
        </div>
        <div className="popular-navbar">
          <div className="popular-navbar-list">
            <div className="navbar-item active">
              <p>All</p>
            </div>
            <div className="navbar-item">
              <FontAwesomeIcon icon={faBurger} className="navbar-icon" />
              <p>Burger</p>
            </div>
            <div className="navbar-item">
              <FontAwesomeIcon icon={faPizzaSlice} className="navbar-icon" />
              <p>Pizza</p>
            </div>
            <div className="navbar-item">
              <FontAwesomeIcon icon={faBreadSlice} className="navbar-icon" />
              <p>Bread</p>
            </div>
          </div>
        </div>
      </div>
      <div className="market">
        <Container>
          <Row>
            {products.map((item, index) => (
              <Col lg={3} md={6} sm={12} className="mb-4">
                <ItemBlock item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Popular;
