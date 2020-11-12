import React, { useState } from "react";
import "./Assets/css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Assets/Fonts/stylesheet.css";
import Cookie from "js-cookie";

import Home from "./containers/Home";
import Offers from "./containers/Offers";
import Header from "./Components/Header";
import Signup from "./containers/Signup";
import Login from "./containers/Login";

function App() {
  // AUTHENTIFICATION STEPS ARE SETUP IN THE APP.JS
  const [token, setToken] = useState(Cookie.get("userToken") || null);
  console.log(token);

  const setUser = (dataToken) => {
    if (dataToken) {
      // CONNECTION = CREATE A TOKEN AND SO COOKIE
      Cookie.set("userToken", dataToken);
      setToken(dataToken);
    } else {
      // DISCONNECTION = REMOVE TOKEN AND COOKIE
      Cookie.remove("userToken");
      setToken(null);
    }
  };

  return (
    <Router>
      <Header token={token} setUser={setUser} />
      <Switch>
        <Route path="/offer/:id">
          <Offers />
        </Route>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
