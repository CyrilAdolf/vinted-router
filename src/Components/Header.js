import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/img/Vinted_logo.png";

const Header = ({ token, setUser }) => {
  return (
    <div className="header">
      <div>
        <div>
          {" "}
          <img src={logo} alt="" className="logo" />
        </div>
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
              <Link to="/signup">S'Inscrire</Link>
              <Link to="/login">Se Connecter</Link>
              <button>vends tes articles</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
