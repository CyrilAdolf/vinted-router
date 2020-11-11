import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import "./Offers.css";

import Header from "../Components/Header";

const Offers = () => {
  // ID from PARAMS CAN BE ACCESSED AND STORE IN A CONST HERE
  const { id } = useParams();

  // A D2PLACER DANS UN COMPONENT
  // A D2PLACER DANS UN COMPONENT
  // A D2PLACER DANS UN COMPONENT
  // A D2PLACER DANS UN COMPONENT

  const [offer, setOffer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ACCESS A ID VIA A REQUEST
  // AXIOS REQ
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setOffer(response.data);
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
  console.log(offer);
  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <Header />
      <div className="single-card">
        <p>{offer.product_description}</p>
        <img src={offer.product_image.secure_url} alt="" />
      </div>
      {/* <div>
        <p className="user">name: {offer.owner.account.username}</p>
        <img
          className="card-picture"
          src={offer.product_image.secure_url}
          alt=""
        />
        <div className="card-footer">
          <div className="col-1">
            <p>{offer.product_price}</p>
            <p>{offer.product_details[0].ÉTAT}</p>
            <p>{offer.product_details[0].marque}</p>
          </div>
          <div className="col-2">
            <p>FAV</p>
            <p>Boosté</p>
          </div>
        </div>

      </div> */}
      <Link to={`/`}> Back to HomePage</Link>
    </div>
  );
};

export default Offers;
