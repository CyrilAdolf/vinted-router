import React from "react";
import "./Card.css";

const Card = ({ offer }) => {
  return (
    <div className="card">
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
    </div>
  );
};

export default Card;