import React, { Component } from "react";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Store from "./Store/configStore";
import MyCart from "./Components/Cart/MyCart";
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
            <Route path="/products" component={ProductList} />
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/:location" component={Home} />
          </Switch>
        </div>
      </Provider>
    );
  }
}
export default App;
