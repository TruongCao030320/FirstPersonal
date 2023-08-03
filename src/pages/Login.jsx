import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container">
      <div className="background">
        <div className="login-form">
          <div className="login-form-title">
            <h2 style={{ textAlign: "center" }}>Login</h2>
          </div>
          <div className="login-form-item">
            <label htmlFor="" className="login-form-label">
              Email
            </label>
            <input type="email" className="login-form-input" />
          </div>
          <div className="login-form-item">
            <label htmlFor="" className="login-form-label">
              Password
            </label>
            <input type="password" className="login-form-input" />
          </div>
          <div className="login-form-item">
            <div className="remember">
              <div className="remember-first">
                <input type="checkbox"></input>
                <div style={{ fontSize: "0.8rem", marginLeft: 2 }}>
                  Remember me
                </div>
              </div>
              <div className="remember-second">
                <div style={{ fontSize: "0.8rem" }} className="forgot-link">
                  Forgot password ?
                </div>
              </div>
            </div>
          </div>
          <Link to="/" style={{ textDecorationLine: "none" }}>
            <div className="login-form-item">
              <button className="login-btn">Sign In</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
