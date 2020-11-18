import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const { id } = useParams();
  const [succeed, setSucceed] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  console.log(id);
  console.log(location.state.offer);

  //   STRIPE REQUEST
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // CARD DATA ARE SEND TO STRIPE
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: "id",
      });
      console.log(stripeResponse);
      // WE RECEIVED A TOKEN ONCE DATA ARE RECEIVED
      const stripeToken = stripeResponse.token.id;

      // A REQ IS SEND TO OUR BACKEND TO SETUP ALL DETAILS (PRICE, DELIVERY)
      const response = await axios.post(
        "https://vinted-api-phoenix2020.herokuapp.com/payment",
        {
          stripeToken: stripeToken,
          price: location.state.offer.product_price + 3.9,
          description: location.state.offer.product_description,
        }
      );
      console.log(response.data);

      //  IF WE GET A POSITIVE RESULT FROM OUR BACKEND
      if (response.data.status === "succeeded") {
        setSucceed(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return succeed ? (
    <div className="msg-succeed container">
      <p>Commande effectuée</p>
      <Link to="/home"> Revenir à la page d'acceiul </Link>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="payForm">
      <h3>Résumé de la commande</h3>
      <div className="info-commande">
        <div>
          <span>Commande</span>
          <span> {location.state.offer.product_price} €</span>
        </div>
        <div>
          <span>Frais de protection acheteurs</span>
          <span>1.30 €</span>
        </div>
        <div>
          <span>Frais de port</span>
          <span>2.60 €</span>
        </div>
      </div>
      <div className="barre"></div>
      <div className="total-section">
        <div>
          <span>Total</span>
          <span>
            {Number((location.state.offer.product_price + 3.9).toFixed(2))} €
          </span>
        </div>
        <div>
          Il ne vous reste plus qu'un étape pour vous offrir{" "}
          <span className="bold">{location.state.offer.product_name}</span>.
          Vous allez payer{" "}
          <span className="bold">
            {Number((location.state.offer.product_price + 3.9).toFixed(2))} €
          </span>
          (frais de protection et frais de port inclus).
        </div>
      </div>
      <div className="barre"></div>
      <CardElement className="card-element" />

      <button type="submit"> Valider mon paiement</button>
    </form>
  );
};

export default Payment;
