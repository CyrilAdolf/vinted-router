import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ifTokenButtons = ({ setUser }) => {
  return (
    <>
      {/* BUTTONS DISPLAYED OVER 1024PX */}
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
        <Link to="/publish" className="header-button">
          <FontAwesomeIcon icon="tag" className="icon" />
          Vends tes Articles
        </Link>
      </div>

      {/* BUTTONS DISPLAYED UNDER 1024PX */}
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
        <Link to="/publish" className="header-button">
          <FontAwesomeIcon icon="tag" className="icon" />
        </Link>
      </div>
    </>
  );
};

export default ifTokenButtons;
