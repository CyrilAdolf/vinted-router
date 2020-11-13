import React, { useState } from "react";
import axios from "axios";

const Login = ({ setUser }) => {
  // STATES FOR FORMS
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   REQUEST CALL ONSUBMIT
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      setUser(response.data.token);
    } catch (error) {
      console.log(error.message);
    }
  };
  //   DEFAULT VALUE TO TEST
  //   email: "brice@lereacteur.io",
  //   password: "azerty",

  return (
    <div className="container">
      Login page
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="email"
          placeholder="name@mail.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
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
