import React from "react";
import Product from "./Product";
export default function ProductList(props) {
  return (
    <div className="all-product-grid">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="product-list-view">
              <div className="row">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />

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
  );
}
