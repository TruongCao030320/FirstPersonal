import React, { useEffect, useState } from "react";
import "../toast/Toast.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Toast = () => {
  useEffect(() => {
    const toast = document.getElementById("toast-wrapper");
    console.log("toast làsssss", toast);
    const child = document.getElementById("toast1");
    let removeToast = setTimeout(() => {
      if (child && child.parentElement === toast) toast.removeChild(child);
    }, 4000);
    const deleteToast = () => {
      toast.removeChild(child);
      clearTimeout(removeToast);
    };

    // Attach an event listener to a button (or other element) to trigger the deleteToast function
    const deleteButton = document.getElementById("delete-button");
    deleteButton.addEventListener("click", deleteToast);

    // Clean up the event listener when the component unmounts
    return () => {
      deleteButton.removeEventListener("click", deleteToast);
    };
  }, []);
  return (
    <div className="toast-wrapper" id="toast-wrapper">
      <div className="toast1" id="toast1">
        <div className="toast-title">
          <h2>Success</h2>
          <FontAwesomeIcon icon={faCheck} className="faCheck" />
        </div>
        <div className="toast-content">Thanks for your purchase!</div>
        <div className="toast-btn">
          <button id="delete-button">OK</button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
