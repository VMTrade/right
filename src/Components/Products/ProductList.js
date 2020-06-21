import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Product from "./Product";
import Header from "../Header/Header";

function ProductList(props) {
  const items = props.product.items;
  const loadMore = () => {};
  return (
    <>
      <Header />
      <div className="all-product-grid">
        <div className="container">
          <div className="main-title-tt">
            <div className="main-title-left">
              <span>Shop items in</span>
              <h2>Category</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="product-list-view">
                <div className="row">
                  {items.map((item) => (
                    <Product data={item} />
                  ))}

                  <div className="col-md-12">
                    <div className="more-product-btn">
                      <button
                        className="show-more-btn hover-btn"
                        onClick={loadMore}
                      >
                        Show More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

export default withRouter(connect(mapStateToProps)(ProductList));
