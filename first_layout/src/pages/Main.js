import React from "react";
import Header from "../components/Header";
import Tabscom from "../components/Tabscom";
import NewsLetter from "../components/NewsLetter";
import StarIcon from "@mui/icons-material/Star";
function Main() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "370px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "250px",
            backgroundImage:
              "url('https://okmenuqr.com/_nuxt/img/restaurant.f3a09ab.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "50%",
            position: "relative",
          }}
        >
          <div className="rest-header-overlay"></div>
          <div
            style={{
              width: "100%",
              height: "40px",
              backgroundImage:
                "url('https://okmenuqr.com/_nuxt/img/curve.9c1d7e7.png')",
              backgroundSize: "101% 100%",
              backgroundPosition: "50%",
              position: "absolute",
              bottom: "0px",
            }}
          ></div>
          <div
            className="rest-logo-container"
            style={{
              backgroundImage:
                "url('http://api.oktabletmenu.com/storage/app/users/Mon-Oct-2019-2013572097png?w=67&h=0')",
              margin: "auto",
            }}
          />
          <div className="start-icon">
            <p>4.5</p>
            <StarIcon style={{ margin: "0 0 1em", fontSize: "28px" }} />
          </div>
        </div>
      </div>

      <Tabscom />
      <NewsLetter />
    </div>
  );
}

export default Main;
