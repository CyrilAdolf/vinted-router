import React from "react";
import { useParams, Link } from "react-router-dom";

const Offers = () => {
  // ID from PARAMS CAN BE ACCESSED AND STORE IN A CONST HERE
  const { id } = useParams();
  return (
    <div>
      {id}
      <Link to={`/`}> TO HomePage</Link>
      OffersPage
    </div>
  );
};

export default Offers;
