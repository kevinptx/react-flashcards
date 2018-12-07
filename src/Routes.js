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
import Card from "./components/Card";
