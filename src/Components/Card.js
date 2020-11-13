import React from "react";

const Card = ({ offer }) => {
  return (
    // NEED TO WORK ON CSS FOR THIS SECTION
    // NEED TO WORK ON CSS FOR THIS SECTION
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
