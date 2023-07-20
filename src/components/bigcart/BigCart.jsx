import React from "react";
import "../bigcart/BigCart.css";
import { Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faDeleteLeft,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
const BigCart = () => {
  const columns = [
    {
      title: "Thumbnail",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Name",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Price",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "address",
      render: (item, index) => (
        <div>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      ),
    },
  ];
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  return (
    <div className="container">
      <div className="table-wrapper">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default BigCart;
