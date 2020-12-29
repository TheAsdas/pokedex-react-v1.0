import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { InfoScreen } from "../screens/InfoScreen";
import { MainScreen } from "../screens/MainScreen";

export const PokedexRoutes: React.FC = () => {
  const main = MainScreen;
  const info = InfoScreen;

  return (
    <Router>
      <div id="routerDiv">
        <Navbar />
        <div style={{ height: "54px" }}></div>
        <Switch>
          <Route exact path="/" component={main} />
          <Route exact path="/:id" component={info} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
