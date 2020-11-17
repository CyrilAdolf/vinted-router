import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cookie from "js-cookie";
import "./Assets/css/App.css";
import "./Assets/Fonts/stylesheet.css";
// MAIN COMPONENTS
import Home from "./containers/Home";
import Offers from "./containers/Offers";
import Publish from "./containers/Publish";
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
library.add(faEnvelope, faKey, faHeart, faUserPlus, faTag, faTimes);

function App() {
  // AUTHENTIFICATION STEPS ARE SETUP IN THE APP.JS
  const [token, setToken] = useState(Cookie.get("userToken") || null);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [search, setSearch] = useState("");
  // FUNCTION TO SET THE TOKEN
  const setUser = (dataToken) => {
    if (dataToken) {
      // CONNECTION = CREATE A TOKEN AND SO A COOKIE
      Cookie.set("userToken", dataToken);
      setToken(dataToken);
    } else {
      // DISCONNECTION = REMOVE COOKIE AND TOKEN
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
        setToken={setToken}
        search={search}
        setSearch={setSearch}
      />
      <Switch>
        <Route path="/offer/:id">
          <Offers />
        </Route>
        <Route path="/publish">
          {token ? <Publish token={token} /> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          <Home search={search} />
        </Route>
      </Switch>
      {/* MODAL PAGES */}
      {modal1 && (
        <Route path="/login">
          <Login setUser={setUser} setModal1={setModal1} />
        </Route>
      )}
      {modal2 && (
        <Route path="/signup">
          <Signup setUser={setUser} setModal2={setModal2} />
        </Route>
      )}
      <Footer />
    </Router>
  );
}

export default App;
