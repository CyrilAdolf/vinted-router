import React from "react";
import { Link } from "react-router-dom";
import IfTokenButtons from "./IfTokenButtons";
import IfNoTokenButtons from "./IfNoTokenButtons";
import logo from "../Assets/img/Vinted_logo.png";

const Header = ({
  token,
  setUser,
  setModal1,
  setModal2,
  search,
  setSearch,
}) => {
  return (
    <div className="container header">
      <div>
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <input
          className="searchBar"
          type="text"
          value={search}
          placeholder="🔍 Rechercher des articles"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="buttons">
          {token ? (
            <IfTokenButtons setUser={setUser} />
          ) : (
            <IfNoTokenButtons setModal1={setModal1} setModal2={setModal2} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
