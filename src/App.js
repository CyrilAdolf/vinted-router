import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Assets/Fonts/stylesheet.css";
import Home from "./containers/Home";
import Offers from "./containers/Offers";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/offer/:id">
          <Offers />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
