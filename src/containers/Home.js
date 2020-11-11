import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import Header from "../Components/Header";

const Home = ({ offers, isLoading }) => {
  // ACCESS A ID VIA A REQUEST
  console.log(offers);
  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div className="container">
      <Header />
      {/* NEED TO MAP OVER OFFER TO PUBLISH OFFERS */}
      <p>{offers}</p>
      <br />
      <Link to={`/offer/`}>Go Products</Link>
    </div>
  );
};

export default Home;
