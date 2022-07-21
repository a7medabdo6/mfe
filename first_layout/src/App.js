import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Main";
import ProductDetails from "./pages/product";
import Header from "./components/Header";
import "./pages/style.css";
export default () => {
  return (
    <div>
      <BrowserRouter>
        <header className="App-header">
          <Header />
        </header>
        <div style={{ marginTop: "80px" }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product" component={ProductDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};
