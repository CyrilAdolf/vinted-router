import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import Card from "../Components/Card";
import Filter from "../Components/Filter";
import PageNumber from "../Components/PageNumber";
import hero from "../Assets/img/hero.jpg";

const Home = ({ search }) => {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [totalPage, setTotalPage] = useState();
  const [asc, setAsc] = useState("price-asc");
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const history = useHistory();

  // AXIOS REQ
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://vinted-api-phoenix2020.herokuapp.com/offers?page=${page}&title=${search}&sort=${asc}&priceMin=${
            minPrice || 0
          }&priceMax=${maxPrice || 99999999999999}&limit=${limit}`
        );
        setOffers(response.data.offers);
        setIsLoading(false);
        setTotalPage(Math.ceil(response.data.count / limit));
        // history.push("/");
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchdata();
  }, [page, search, asc, minPrice, maxPrice, limit, history]);

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
      <Filter
        asc={asc}
        setAsc={setAsc}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <div className="card-section">
        {offers &&
          offers.map((offer, i) => {
            return (
              <Link to={`/offer/${offer._id}`} key={offer._id}>
                <Card offer={offer} />
              </Link>
            );
          })}
      </div>
      <PageNumber arrayPage={arrayPage} setPage={setPage} />
      {/* DEFINE HOW MANY RESULT TO DISPLAY WITH SETLIMIT STATE */}
    </div>
  );
};

export default Home;
