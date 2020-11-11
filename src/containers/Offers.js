import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


const Offers = () => {
  // useParams GAVE US A OBJECT. HERE WE DESTRUCTURE IT
  const { id } = useParams();

  // A D2PLACER DANS UNE FONCTION
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
  }, []);
  // A D2PLACER DANS UNE FONCTION

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <div className="single-card">
        <p>{offer.product_description}</p>
        <img src={offer.product_image.secure_url} alt="" />
      </div>

      <Link to={`/`}> Back to HomePage</Link>
    </div>
  );
};

export default Offers;
