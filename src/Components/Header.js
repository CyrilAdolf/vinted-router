import React from "react";
import logo from "../Assets/img/Vinted_logo.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <div>
          {" "}
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="buttons">
          <button>s'inscrire</button>
          <button>se connecter</button>
          <button>vends tes articles</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
