import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Restroom from "./Restroom";

export default function Routing() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/restrooms">
            <Restroom />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
