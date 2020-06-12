import React from "react";
import { connect } from "react-redux";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CategoryList from "../Components/Categories/CategoryList";

function Home(props) {
  return (
    <div>
      <Header />
      <CategoryList />
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
