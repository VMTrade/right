import React from "react";
import Header from "./Header";
import OfferList from "./OffersList/OffersList";
import Footer from "./Footer";
import ShopNowCardList from "./ShopNow/ShopNowCardList";
import CategoryList from "./Categories/CategoryList";
import { connect } from "react-redux";

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
