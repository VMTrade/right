import React, { Component } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MyCart from "./Components/Cart/MyCart";
import OffersList from "./Components/OffersList/OffersList";
import ShopNowCardList from "./Components/ShopNow/ShopNowCardList";
import CategoryList from "./Components/Categories/CategoryList";
import Converted from "./Components/Products/converted";
import ProductList from "./Components/Products/ProductList";
import NavbarMain from "./Components/Navbar/NavbarMain";
class App extends Component {
  render() {
    return (
      <div>
        <NavbarMain />
        <ProductList />
        <Footer />
        {/*<Header />
        <MyCart />

        <ShopNowCardList />
        <CategoryList />
        <OffersList />
       
        
        */}
      </div>
    );
  }
}
export default App;
