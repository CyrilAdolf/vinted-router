import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import Home from "./containers/Home";
import Products from "./containers/Products";

function App() {
  // DEFINE STATES HERE
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // AXIOS REQ
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://vinted-api-phoenix2020.herokuapp.com/"
      );
      setProducts(response.data);
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
  products, isLoading, 
  */
  return (
    <Router>
      <Switch>
        <Route path="/product">
          <Products />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
