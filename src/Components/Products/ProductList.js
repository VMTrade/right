import React from "react";
import { withRouter } from "react-router-dom";

import Product from "./Product";
import Header from "../Header";

export default withRouter(function ProductList(props) {
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
                  <Product
                    data={{
                      pid: "1",
                      catid: "3",
                      name: "product 1",
                      img: "",
                      aprice: "10",
                      sprice: "20",
                      status: "available",
                    }}
                  />

                  <div className="col-md-12">
                    <div className="more-product-btn">
                      <button
                        className="show-more-btn hover-btn"
                        onclick="window.location.href = '#';"
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
});
