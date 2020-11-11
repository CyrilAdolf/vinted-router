import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import Home from "./containers/Home";
import Offers from "./containers/Offers";

function App() {
  // DEFINE STATES HERE
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // AXIOS REQ
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://vinted-api-phoenix2020.herokuapp.com/"
      );
      setOffers(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  // LOADING
  useEffect(() => {
    fetchdata();
  }, []);

  /* PROPS TO PASS :
  offers, isLoading, 
  */
  return (
    <Router>
      <Switch>
        <Route path="/offer/:id">
          <Offers />
        </Route>
        <Route path="/" offers={offers} isLoading={isLoading}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
