import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = ({ setUser, setModal2 }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  // SIGNUP REQUEST
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://vinted-api-phoenix2020.herokuapp.com/user/signup",
        { email: email, username: username, password: password }
      );
      setUser(response.data.token);
      history.push("/");
    } catch (error) {
      console.log(error.message);
      alert("Une erreur s'est produite, veuillez réessayer");
    }
  };

  return (
    <div className="container login modal-wrapper">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div
          className="exit-modal"
          onClick={() => {
            setModal2(false);
          }}
        >
          <FontAwesomeIcon icon="times" className="icon" />
        </div>
        <p>Inscription</p>
        <input
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="Nom d'utilisateur"
        />
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="merci@tous.com"
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Mot de passe"
        />
        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};
export default Signup;
