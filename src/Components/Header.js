import React from "react";
import hero from "../Assets/img/hero.jpg";

const Header = () => {
  return (
    <div className="header">
      <div>
        <div>Logo</div>
        <div className="buttons">
          <button>s'inscrire</button>
          <button>se connecter</button>
          <button>vends tes articles</button>
        </div>
      </div>
      <div className="hero">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Header;
