import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";

import Header from "../Components/Header";
import Card from "../Components/Card";

// import Request from "../Components/Request";

const Home = () => {
  // A D2PLACER DANS UN COMPONENT
  // A D2PLACER DANS UN COMPONENT
  // A D2PLACER DANS UN COMPONENT
  // A D2PLACER DANS UN COMPONENT

  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ACCESS A ID VIA A REQUEST
  // AXIOS REQ
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setOffers(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    // LOADING
    fetchdata();
  }, []);

  // A D2PLACER DANS UN COMPONENT
  // A D2PLACER DANS UN COMPONENT
  // A D2PLACER DANS UN COMPONENT
  // A D2PLACER DANS UN COMPONENT

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div className="container">
      <Header />
      {/* NEED TO MAP OVER OFFER TO PUBLISH OFFERS */}
      <p>{offers[0].product_name}</p>
      <br />
      {/* <Link to={`/offer/${id}`}>Go offers</Link> */}
      <Link to={`/offer/`} className="card-section">
        {offers.map((offer, i) => {
          return <Card offer={offer} />;
        })}
      </Link>
    </div>
  );
};

export default Home;
