import React from "react";
import { connect } from "react-redux";

import Header from "../Components/Header";
import OfferList from "../Components/OffersList/OffersList";
import Footer from "../Components/Footer";
import ShopNowCardList from "../Components/ShopNow/ShopNowCardList";
import CategoryList from "../Components/Categories/CategoryList";

function Home(props) {
  return (
    <div>
      <Header />
      <h1>Location from redux is {props.curLocation}</h1>
      <ShopNowCardList />
      <CategoryList />
      <OfferList />

      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    curLocation: state,
  };
};
export default connect(mapStateToProps)(Home);
