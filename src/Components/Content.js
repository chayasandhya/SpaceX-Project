import React from "react";
import Login from "./Login/Login";
import Nav from "./Nav/Nav";

import Contact from "./Contact/Contact";
//routing --------------------------------------------------------------------------------
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Component --------------------------------------------------------------------------------
import PrivateRoute from "./Routing/PrivateRoute";
import Info from "./Dashboard/Info/Info";
import Launches from "./Dashboard/Launches/Launches";

const Content = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/login" component={Login}></Route>
          <PrivateRoute exact path="/info" component={Info}></PrivateRoute>
          <PrivateRoute
            exact
            path="/launches"
            component={Launches}
          ></PrivateRoute>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Content;
