import React from "react";
import Header from "../components/Header";
import Tabscom from "../components/Tabscom";
import NewsLetter from "../components/NewsLetter";

function Main() {
  return (
    <>
      <header className="App-header">
        <Header />
      </header>
      <div style={{ marginTop: "50px" }}>
        <Tabscom />
        <NewsLetter />
      </div>
    </>
  );
}

export default Main;
