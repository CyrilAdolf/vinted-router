import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../Components/Card";
import hero from "../Assets/img/hero.jpg";

const Home = () => {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
    fetchdata();
  }, []);

  return isLoading ? (
    <p className="container">En cours de chargement...</p>
  ) : (
    <div className="container">
      <div className="hero">
        <img src={hero} alt="hero" />
      </div>
      <br />
      <div className="card-section">
        {offers.map((offer, i) => {
          return (
            <Link to={`/offer/${offer._id}`} key={offer._id}>
              <Card offer={offer} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
