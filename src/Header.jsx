import React, { useEffect } from "react";
import "./Header.css";
import { linkWithCredential } from "firebase/auth";

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
        </p>{" "}
        <p
          className="admin__icon"
          onClick={() => {
            localStorage.removeItem("user");
            window.location.reload();
          }}
        >
          Logout
        </p>
      </div>
    </div>
  );
};

export default Header;
