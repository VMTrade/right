import React, { Component } from "react";
import { Provider } from "react-redux";
import Store from "./Store/configStore";
import { Switch, Route, Link } from "react-router-dom";

import MyCart from "./Components/Cart/MyCart";
import SignIn from "./Components/Login/SignIn";
import SignUp from "./Components/Login/SignUp";
import Home from "./Components/Home";
import ProductList from "./Components/Products/ProductList";
import RestaurantHome from "./Components/Restaurant/RestaurantHome";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/home/:location" component={Home} />
            <Route path="/products" component={ProductList} />
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={SignUp} />
          </Switch>
        </div>
      </Provider>
    );
  }
}
export default App;
