import React, { useState } from "react";
import "./Assets/css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Assets/Fonts/stylesheet.css";
import Cookie from "js-cookie";

import Home from "./Containers/Home";
import Offers from "./Containers/Offers";
import Header from "./Components/Header";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Footer from "./Components/Footer";

// FONTAWESOME LIBRARY
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faHeart,
  faUserPlus,
  faTag,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import {
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faEnvelope,
  faKey,
  faHeart,
  faUserPlus,
  faTag,
  faTimes,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub
);

function App() {
  // AUTHENTIFICATION STEPS ARE SETUP IN THE APP.JS
  const [token, setToken] = useState(Cookie.get("userToken") || null);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

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
      <Header
        token={token}
        setUser={setUser}
        setModal1={setModal1}
        setModal2={setModal2}
      />
      <Switch>
        <Route path="/offer/:id">
          <Offers />
        </Route>

        <Route path="/">
          <Home />
        </Route>
        <Route>{"404"}</Route>
      </Switch>
      {modal1 ? (
        <Route path="/login">
          <Login setUser={setUser} setModal1={setModal1} />
        </Route>
      ) : null}
      {modal2 ? (
        <Route path="/signup">
          <Signup setUser={setUser} setModal2={setModal2} />
        </Route>
      ) : null}
      <Footer />
    </Router>
  );
}

export default App;
