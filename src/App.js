import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Tutorial from "./components/tutorial/Tutorial";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Type from "./components/typeoffood/Type";
import WhatWeServe from "./components/whatweserve/WhatWeServe";
import Popular from "./components/popular/Popular";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Routes from "./routers/Routes";
import LayOut from "./components/layout/LayOut";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Toast from "./components/toast/Toast";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <LayOut />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
