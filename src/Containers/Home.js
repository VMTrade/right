import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../Store/actions/index";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";
import CategoryList from "../Components/Categories/CategoryList";
import Spinner from "../Components/Common/Spinner";

function Home(props) {
  const [loading, setLoading] = useState(false);
  const data = props.config.loadedData;
  useEffect(() => {}, []);

  const homeView = (
    <>
      <Header />
      <CategoryList />
      <Footer />
    </>
  );
  const spinner = (
    <div>
      <Spinner />
    </div>
  );
  return <div>{loading ? spinner : homeView}</div>;
}
const mapStateToProps = (state) => {
  return {
    config: state.config,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(actionCreators.loadData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
