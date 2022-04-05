import React from "react";
import { GiBatMask } from "react-icons/gi";

function Topbar() {
  return (
    <div className="topbar">
      <span className="wrapper">
        {" "}
        <GiBatMask className="icon" /> Username
      </span>
    </div>
  );
}

export default Topbar;
