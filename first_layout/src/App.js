import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Main";
import ProductDetails from "./pages/product";

import "./pages/style.css";
export default () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/product" component={ProductDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
