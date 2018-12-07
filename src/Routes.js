// Routes will be what App was in the lecture today.
// Index will reference Routes instead of App:

// ReactDOM.render(<Routes />, document.getElementById("root"));
import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import App from "./App";

const Routes = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/card" component={App} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default Routes;
