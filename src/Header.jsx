import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left"></div>
      <div className="header__logo">
        <h2
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Designer Clothes
        </h2>
      </div>{" "}
      <div className="header__right">
        <p
          className="admin__icon"
          onClick={() => {
            window.location.href = "/admin";
          }}
        >
          Admin
        </p>
      </div>
    </div>
  );
};

export default Header;
