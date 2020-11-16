import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = ({ setUser, setModal1 }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://vinted-api-phoenix2020.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      setUser(response.data.token);
      history.push("/publish");
    } catch (error) {
      console.log(error.message);
    }
  };
  //   DEFAULT VALUE TO TEST
  //   email: "brice@lereacteur.io",
  //   password: "azerty",
  return (
    <div className="container login modal-wrapper">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div
          className="exit-modal"
          onClick={() => {
            setModal1(false);
          }}
        >
          <FontAwesomeIcon icon="times" className="icon" />
        </div>
        <p>Connexion</p>
        <input
          type="email"
          placeholder="merci@tous.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="submit"
          value="Se connecter"
          onClick={() => {
            handleSubmit();
          }}
        />
      </form>
    </div>
  );
};

export default Login;
