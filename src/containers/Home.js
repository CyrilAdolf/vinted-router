import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import Header from "../Components/Header";

const Home = () => {
  // ACCESS A ID VIA A REQUEST
  return (
    <div className="container">
      <Header />
      HomePage
      <p>
        ACCES VERS LE BACKEN (route GET) : <br />
        https://vinted-api-phoenix2020.herokuapp.com/
      </p>
      <br />
      <Link to={`/product/`}>Go Products</Link>
    </div>
  );
};

export default Home;
