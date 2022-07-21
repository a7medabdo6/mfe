import React from "react";
import Header from "../components/Header";
import Tabscom from "../components/Tabscom";
import NewsLetter from "../components/NewsLetter";

function Main() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "250px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "150px",
            backgroundImage:
              "url('https://okmenuqr.com/_nuxt/img/restaurant.f3a09ab.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "50%",
          }}
        ></div>
      </div>

      <Tabscom />
      <NewsLetter />
    </>
  );
}

export default Main;
