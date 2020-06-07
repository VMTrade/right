import React, { Component } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MyCart from "./Components/Cart/MyCart";
import OffersList from "./Components/OffersList/OffersList";
import ShopNowCardList from "./Components/ShopNow/ShopNowCardList";
import CategoryList from "./Components/Categories/CategoryList";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MyCart />
        {/*<ShopNowCardList />*/}
        <CategoryList />
        <OffersList />
        <Footer />
      </div>
    );
  }
}
export default App;
