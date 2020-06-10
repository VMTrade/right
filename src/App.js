import React, { Component } from "react";
import { Provider } from "react-redux";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Store from "./Store/configStore";
import MyCart from "./Components/Cart/MyCart";
import OffersList from "./Components/OffersList/OffersList";
import ShopNowCardList from "./Components/ShopNow/ShopNowCardList";
import CategoryList from "./Components/Categories/CategoryList";
import Converted from "./Components/Products/converted";
import ProductList from "./Components/Products/ProductList";
import RestaurantHome from "./Components/Restaurant/RestaurantHome";
import NavbarMain from "./Components/Navbar/NavbarMain";
import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/:location/restaurants"
              component={RestaurantHome}
            />
            <Route path="/:location" component={Home} />
            <Route path="/products" component={ProductList} />
          </Switch>
        </div>
      </Provider>
    );
  }
}
export default App;
