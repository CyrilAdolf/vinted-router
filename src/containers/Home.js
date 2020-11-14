import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../Components/Card";
import hero from "../Assets/img/hero.jpg";

const Home = () => {
  const [offers, setOffers] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Si je mets le numero de page dans un state? La requete va se relancer à chaque changement de page et limiter le temps de chargement.
  // Il Faut définir le state à 1 par défaut. si on change de page il ne reviendra pas a 1 tout seul ?

  // AXIOS REQ
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          // REPLACE WITH MY BACKEND URL
          `https://lereacteur-vinted-api.herokuapp.com/offers?limit=${8}&page=${page}`
        );
        setOffers(response.data.offers);
        setIsLoading(false);
        setTotalPage(Math.ceil(response.data.count / 8));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchdata();
  }, [page]);

  // DEFINE AN ARRAY WITH NUMBER FROM 1 TO TOTALPAGE
  let arrayPage = [];
  for (let i = 1; i <= totalPage; i++) {
    arrayPage.push(i);
  }

  return isLoading ? (
    // PACKAGE ARE AVAILABLE TO STYLE LOADING SCREEN
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
      <div className="pageInfo">
        <p>Pages</p>
        <div className="pageNumber">
          {/* MAP OVER A LIST OF NUMBER */}
          {arrayPage.map((page, i) => {
            return (
              <p
                className="eachNumber"
                onClick={() => {
                  setPage(page);
                }}
              >
                {page}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
