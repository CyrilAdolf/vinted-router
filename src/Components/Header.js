import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/img/Vinted_logo.png";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ token, setUser }) => {
  return (
    <div className="container header">
      <div>
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <input type="text" />
        <div className="buttons">
          {token ? (
            <>
              <button
                onClick={() => {
                  setUser(null);
                }}
              >
                Se Déconnecter
              </button>
              <button>vends tes articles</button>
            </>
          ) : (
            <>
              <Link to="/signup" className="header-button">
                <FontAwesomeIcon icon="user-plus" className="icon" />
                S'inscrire{" "}
              </Link>
              <Link to="/login" className="header-button">
                <FontAwesomeIcon icon="key" className="icon" /> Se Connecter
              </Link>
              <Link to="/" className="header-button">
                <FontAwesomeIcon icon="tag" className="icon" />
                Vends tes Articles
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
