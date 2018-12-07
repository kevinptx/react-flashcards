import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
