import React from "react";
import Logo from "../images/logo.png";

export default function Header() {
  return (
    <div className="header-cont">
      <div className="logo-container">
        <img alt="" src={Logo} />
        <span>my travel journal.</span>
      </div>
    </div>
  );
}
