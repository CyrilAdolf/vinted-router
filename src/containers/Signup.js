import React, { useState } from "react";
import axios from "axios";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { email: email, username: username, password: password }
      );
      console.log(response.data);
      setUser(response.data.token);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      Signup page
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="username"
        />
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="dupond@mail.com"
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="password"
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
