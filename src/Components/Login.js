import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = ({ setUser, setModal1 }) => {
  // STATE INITIATED TO DEFAULT USER FOR TEST
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("azerty");

  const history = useHistory();

  // LOGIN REQUEST
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://vinted-api-phoenix2020.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      setUser(response.data.token);
      history.push("/");
    } catch (error) {
      console.log(error.message);
      alert("Une erreur s'est produite, vous n'êtes pas connecté");
    }
  };

  return (
    <div className="login modal-wrapper">
      <form>
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
          onClick={(event) => {
            handleSubmit(event);
          }}
        />
      </form>
    </div>
  );
};

export default Login;
