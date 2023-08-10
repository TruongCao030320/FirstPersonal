import React from "react";
import "../bigcart/BigCart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../store/shoppingSlice";
import { Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faDeleteLeft,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const BigCart = () => {
  const columns = [
    {
      title: "Thumbnail",
      dataIndex: "image",
      render: (_, record) => (
        <img src={record.image} style={{ width: 50 }}></img>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Action",
      key: "address",
      render: (_, record) => (
        <div>
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon={faTrash}
            onClick={() => handleDeleteItem(record.id)}
          />
        </div>
      ),
    },
  ];
  const dispatch = useDispatch();
  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };
  const dataSource = useSelector((state) => state.shopping.item);
  return (
    <div className="container">
      <div className="table-wrapper">
        <Table dataSource={dataSource} columns={columns} />
        <div className="checkout-btn">
          <button>
            <Link to="/paying" style={{ textDecoration: "none" }}>
              Check out
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigCart;
