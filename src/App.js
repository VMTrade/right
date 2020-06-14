import React, { Component } from "react";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Store from "./Store/configStore";
import SignIn from "./Containers/SignIn";
import SignUp from "./Containers/SignUp";
import Home from "./Containers/Home";
import ProductList from "./Components/Products/ProductList";
import Dashboard from "./Containers/Dashboard";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/:location" component={Home} />
            <Route path="/:location/:id" render={ProductList} />
          </Switch>
        </div>
      </Provider>
    );
  }
}
export default App;
