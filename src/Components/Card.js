import React from "react";

const Card = ({ offer }) => {
  return (
    <div className="card">
      <div className="user">
        <span>
          {offer.owner.account.username && offer.owner.account.username}
        </span>
        <span>{offer.product_name && offer.product_name}</span>
      </div>
      {offer.product_image ? (
        <img
          className="card-picture"
          src={offer.product_image.secure_url}
          alt={offer.product_image.secure_url}
        />
      ) : (
        <img className="card-picture" />
      )}
      <div className="card-footer">
        <p>{offer.product_price} €</p>
        <p>{offer.product_details[3].TAILLE}</p>
        <p>{offer.product_details[2].MARQUE}</p>
      </div>
    </div>
  );
};

export default Card;
