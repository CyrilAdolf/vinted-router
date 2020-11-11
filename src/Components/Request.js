// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Request = () => {
//   const [offers, setOffers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // ACCESS A ID VIA A REQUEST
//   // AXIOS REQ
//   useEffect(() => {
//     const fetchdata = async () => {
//       try {
//         const response = await axios.get(
//           "https://lereacteur-vinted-api.herokuapp.com/offers"
//         );
//         setOffers(response.data.offers);
//         setIsLoading(false);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     // LOADING
//     fetchdata();
//   }, []);

//   return <div></div>;
// };

// export default Request;
