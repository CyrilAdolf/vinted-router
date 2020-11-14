import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/img/Vinted_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// MAYBE SPLIT THIS INTO SMALLER COMPONENTS
// BUTTON DONT LINK TO THE SAME PAGE, GIVE THIS INFOS IN PROPS
const Header = ({ token, setUser, setModal1, setModal2 }) => {
  return (
    <div className="container header">
      <div>
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>

        {/* SEARCHBAR */}
        {/* SEARCHBAR */}
        <input type="text" />
        {/* SEARCHBAR */}
        {/* SEARCHBAR */}

        <div className="buttons media-1024">
          {token ? (
            // <>
            //   <button className="disconnect"
            //     onClick={() => {
            //       setUser(null);
            //     }}
            //   >
            //     Se Déconnecter
            //   </button>
            //   <button>Vends tes articles</button>
            // </>
            <>
              <div className="media-1024">
                <Link
                  to="/"
                  className="header-button disconnect"
                  onClick={() => {
                    setUser(null);
                  }}
                >
                  <FontAwesomeIcon icon="key" className="icon" /> Se Déconnecter
                </Link>
                <Link to="/" className="header-button">
                  <FontAwesomeIcon icon="tag" className="icon" />
                  Vends tes Articles
                </Link>
              </div>
              <div className="hidden">
                <Link
                  to="/"
                  className="header-button disconnect"
                  onClick={() => {
                    setUser(null);
                  }}
                >
                  <FontAwesomeIcon icon="key" className="icon" />
                </Link>
                <Link to="/" className="header-button">
                  <FontAwesomeIcon icon="tag" className="icon" />
                </Link>
              </div>
              </>
          ) : (
            <>
              <div className="media-1024">
                <Link
                  to="/signup"
                  className="header-button"
                  onClick={() => {
                    setModal2(true);
                  }}
                >
                  <FontAwesomeIcon icon="user-plus" className="icon" />
                  S'inscrire
                </Link>
                <Link
                  to="/login"
                  className="header-button"
                  onClick={() => {
                    setModal1(true);
                  }}
                >
                  <FontAwesomeIcon icon="key" className="icon" /> Se Connecter
                </Link>
                <Link to="/" className="header-button">
                  <FontAwesomeIcon icon="tag" className="icon" />
                  Vends tes Articles
                </Link>
              </div>
              <div className="hidden">
                <Link
                  to="/signup"
                  className="header-button"
                  onClick={() => {
                    setModal2(true);
                  }}
                >
                  <FontAwesomeIcon icon="user-plus" className="icon" />
                </Link>
                <Link
                  to="/login"
                  className="header-button"
                  onClick={() => {
                    setModal1(true);
                  }}
                >
                  <FontAwesomeIcon icon="key" className="icon" />
                </Link>
                <Link to="/" className="header-button">
                  <FontAwesomeIcon icon="tag" className="icon" />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
