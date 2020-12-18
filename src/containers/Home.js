import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

// IMPORT COMPONENTS AND HERO
import Card from "../Components/Card";
import Filter from "../Components/Filter";
import PageNumber from "../Components/PageNumber";
import LoadingComponent from "../Components/LoadingComponent";
import hero from "../Assets/img/hero.jpg";

const Home = ({ search }) => {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [asc, setAsc] = useState("price-asc");
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  // FIXED VALUE
  const limit = 8;

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
      } catch (error) {
        console.log(error.response);
        alert(
          "Une erreur s'est produite lors de la recherche. Veuillez réessayer"
        );
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
    <p className="container">
      <LoadingComponent />
    </p>
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
    </div>
  );
};

export default Home;
