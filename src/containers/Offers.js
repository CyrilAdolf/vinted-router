import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Offers = ({ handleFetch }) => {
  // useParams GAVE US A OBJECT. HERE WE DESTRUCTURE IT
  const { id } = useParams();
  const [offer, setOffer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // ALLOWS US TO MODIFY THE BIGGER PICTURE
  const [mainPicture, setMainPicture] = useState();
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
  console.log(offer);
  return isLoading ? (
    <p className="container">En cours de chargement...</p>
  ) : (
    <div className="container">
      <div className="offers">
        <div className="pictures">
          {mainPicture ? (
            <img src={mainPicture} alt="" />
          ) : (
            <img src={offer.product_image.secure_url} alt="" />
          )}
          <div>
            {offer.product_pictures &&
              offer.product_pictures.map((picture, i) => {
                return (
                  <img
                    className="additionalPic"
                    src={picture.secure_url}
                    alt=""
                    key={picture.asset_id}
                    onClick={() => {
                      setMainPicture(picture.secure_url);
                    }}
                  />
                );
              })}
          </div>
        </div>
        <div className="single-card">
          <div className="price"> {offer.product_price} €</div>
          <div className="descript">
            {offer.product_details.map((detail, i) => {
              return (
                <div>
                  <span>{Object.keys(detail)}</span>
                  <span>{detail[Object.keys(detail)]}</span>
                </div>
              );
            })}
          </div>
          <p style={{ color: "#999999" }}>DESCRIPTION :</p>
          <p>{offer.product_description}</p>
        </div>
      </div>
      <Link to={`/`}>⇤ Revenir à la page d'accueil</Link>
    </div>
  );
};

export default Offers;
