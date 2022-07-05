import React from "react";
import MarketingApp from "./components/FirstLayoutApp";

export default () => {
  console.log("container app after invalidation cache");
  return (
    <div>
      <MarketingApp />
    </div>
  );
};
