import * as React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

const history = createBrowserHistory();

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  rootElement
);
