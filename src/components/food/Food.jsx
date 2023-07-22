import React, { useState } from "react";
import styles from "../food/Food.module.css";
import image from "../../assets/images/special-menu.png";
import { render } from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import products from "../../assets/fake-data/products";
import Pagination from "../pagination/Pagination";
import FoodCart from "./FoodCart";
const Food = () => {
  const newProducts = products;
  const [currentPage, setCurrentPage] = useState(1);
  const [foodPerPage, setFoodPerPage] = useState(4);
  const [data, setData] = useState(products);
  const lastProductIndex = currentPage * foodPerPage;
  const firstPostIndex = lastProductIndex - foodPerPage;
  const currentProducts = data.slice(firstPostIndex, lastProductIndex);
  return (
    <div className="container">
      <div className={styles.special__menu}>
        <h1>Special Menu</h1>
      </div>
      <div className={styles.food}>
        <div className={styles.searchbar}>
          <input
            placeholder="Search..."
            style={{
              border: "none",
              outline: "none",
              opacity: 0.5,
              borderRadius: 20,
              height: 40,
              padding: 10,
            }}
          ></input>
          <div className={styles.select}>
            <select class={styles.form__select} id="sel1" name="sellist1">
              <option>High-price</option>
              <option>Low-price</option>
              <option>A-Z</option>
              <option>Z-A</option>
            </select>
          </div>
        </div>
        <Container>
          <Row>
            {currentProducts.map((item, index) => (
              <Col lg={6} md={12} sm={12}>
                <FoodCart foodItem={item} />
              </Col>
            ))}
          </Row>
        </Container>
        <Pagination
          totalfoods={data.length}
          foodperpage={foodPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
export const item = () => {
  return render(
    <div>
      <div className="item-content">
        <div className="item-title">Pizza</div>
        <div className="item-desc">From France Chef</div>
        <div className="item-cost">25$</div>
      </div>
      <img src={image} className="item-image"></img>
    </div>
  );
};
export default Food;
