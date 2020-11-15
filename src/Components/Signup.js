import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = ({ setUser, setModal2 }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { email: email, username: username, password: password }
      );
      setUser(response.data.token);
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
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
        <input
          type="submit"
          value="S'inscrire"
          onClick={() => {
            // AXIOS REQ
            handleSubmit();
          }}
        />
      </form>
    </div>
  );
};
export default Signup;
