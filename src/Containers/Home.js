import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CategoryList from "../Components/Categories/CategoryList";
import Spinner from "../Components/Common/Spinner";

function Home(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => setLoading(false), 1000);
  });
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
    state,
  };
};
export default connect(mapStateToProps)(Home);
