import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Offers = ({ handleFetch }) => {
  // useParams GAVE US A OBJECT. HERE WE DESTRUCTURE IT
  const { id } = useParams();
  // console.log(id);
  const [offer, setOffer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
    fetchdata();
  }, [id]);

  return isLoading ? (
    <p className="container">En cours de chargement...</p>
  ) : (
    <div className="container">
      <div className="single-card">
        <p>{offer.product_description}</p>
        <img src={offer.product_image.secure_url} alt="" />
      </div>

      <Link to={`/`}>Revenir à la page d'accueil</Link>
    </div>
  );
};

export default Offers;
