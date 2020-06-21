import React from "react";
import { Route, Switch } from "react-router-dom";

import Summary from "./Summary";
import Bill from "./Bill";
import Header from "../Header/Header";

export default function Checkout(props) {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={`${props.match.url}/`} component={Summary} />
        <Route path={`${props.match.url}/bill`} component={Bill} />
      </Switch>
    </div>
  );
}
