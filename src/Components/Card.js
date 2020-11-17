import React from "react";

const Card = ({ offer }) => {
  return (
    <div className="card">
      <p className="user">
        {offer.owner.account.username && offer.owner.account.username}
      </p>
      <img
        className="card-picture"
        src={offer.product_image.secure_url}
        alt={offer.product_image.secure_url}
      />
      <div className="card-footer">
        <p>{offer.product_price} €</p>
        <p>{offer.product_details[3].TAILLE}</p>
        <p>{offer.product_details[2].MARQUE}</p>
      </div>
    </div>
  );
};

export default Card;
