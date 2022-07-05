import React from "react";
import "../MuiClassNameSetup";
import "./style.css";
import Home from "./Main";
import ProductDetails from "./product";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function index() {
  console.log("first");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default index;
