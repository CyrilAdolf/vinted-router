import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "../Components/Card";
import hero from "../Assets/img/hero.jpg";

const Home = ({ search }) => {
  const [offers, setOffers] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [asc, setAsc] = useState("price-asc");
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  // AXIOS REQ
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          // REPLACE WITH MY BACKEND URL
          minPrice
            ? maxPrice
              ? `https://lereacteur-vinted-api.herokuapp.com/offers?limit=${8}&page=${page}&title=${search}&sort=${asc}&priceMin=${minPrice}&priceMax=${maxPrice}`
              : `https://lereacteur-vinted-api.herokuapp.com/offers?limit=${8}&page=${page}&title=${search}&sort=${asc}&priceMin=${minPrice}`
            : `https://lereacteur-vinted-api.herokuapp.com/offers?limit=${8}&page=${page}&title=${search}&sort=${asc}` &&
              maxPrice
            ? minPrice
              ? `https://lereacteur-vinted-api.herokuapp.com/offers?limit=${8}&page=${page}&title=${search}&sort=${asc}&priceMin=${minPrice}&priceMax=${maxPrice}`
              : `https://lereacteur-vinted-api.herokuapp.com/offers?limit=${8}&page=${page}&title=${search}&sort=${asc}&priceMax=${maxPrice}`
            : `https://lereacteur-vinted-api.herokuapp.com/offers?limit=${8}&page=${page}&title=${search}&sort=${asc}`
        );
        // BUG HERE : WHEN MIN OR MAXPRICE APPLIED WE NEED TO GO BACK TO PAGE 1
        // BUG HERE : WHEN MIN OR MAXPRICE APPLIED WE NEED TO GO BACK TO PAGE 1
        // BUG HERE : WHEN MIN OR MAXPRICE APPLIED WE NEED TO GO BACK TO PAGE 1
        setOffers(response.data.offers);
        setIsLoading(false);
        setTotalPage(Math.ceil(response.data.count / 8));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchdata();
  }, [page, search, asc, minPrice, maxPrice]);

  // DEFINE AN ARRAY WITH NUMBER FROM 1 TO TOTALPAGE
  let arrayPage = [];
  for (let i = 1; i <= totalPage; i++) {
    arrayPage.push(i);
  }

  console.log(minPrice);
  return isLoading ? (
    // PACKAGE ARE AVAILABLE TO STYLE LOADING SCREEN
    <p className="container">En cours de chargement...</p>
  ) : (
    <div className="container">
      <div className="hero">
        <img src={hero} alt="hero" />
      </div>
      <div className="filter">
        <div className="filterAsc">
          {asc === "price-asc" ? (
            <p
              onClick={() => {
                setAsc("price-desc");
              }}
            >
              ⇣ Trier par prix décroissant ?
            </p>
          ) : (
            <p
              onClick={() => {
                setAsc("price-asc");
              }}
            >
              ⇡ Trier par prix croissant ?
            </p>
          )}
        </div>
        <div className="filterPriceMinMax">
          Prix min :
          <input
            type="text"
            value={minPrice}
            onChange={(e) => {
              setMinPrice(e.target.value);
            }}
          />
          Prix max :
          <input
            type="text"
            value={maxPrice}
            onChange={(e) => {
              setMaxPrice(e.target.value);
            }}
          />
        </div>
      </div>
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
                key={i}
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
