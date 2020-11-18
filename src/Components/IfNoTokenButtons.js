import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IfNoTokenButtons = ({ setModal1, setModal2 }) => {
  return (
    <>
      {/* BUTTONS DISPLAYED WHEN OVER 1024PX */}
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
        <Link
          to="/login"
          className="header-button"
          onClick={() => {
            setModal1(true);
          }}
        >
          <FontAwesomeIcon
            icon="tag"
            className="icon"
            onClick={() => {
              setModal1(true);
            }}
          />
          Vends tes Articles
        </Link>
      </div>
      {/* BUTTONS DISPLAYED WHEN UNDER 1024PX */}
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
        <Link to="/login" className="header-button">
          <FontAwesomeIcon
            icon="tag"
            className="icon"
            onClick={() => {
              setModal1(true);
            }}
          />
        </Link>
      </div>
    </>
  );
};
export default IfNoTokenButtons;
