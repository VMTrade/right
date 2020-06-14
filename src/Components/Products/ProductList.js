import React from "react";
import { withRouter } from "react-router-dom";

import Product from "./Product";
import Header from "../Header";

export default withRouter(function ProductList(props) {
  const items = [
    {
      pid: "1",
      catid: "3",
      name: "product 1",
      img: "",
      aprice: 450,
      sprice: 620,
      status: "outofstock",
    },
    {
      pid: "2",
      catid: "3",
      name: "product 2",
      img: "",
      aprice: 100,
      sprice: 150,
      status: "available",
    },
    {
      pid: "3",
      catid: "3",
      name: "product 3",
      img: "",
      aprice: 100,
      sprice: 200,
      status: "available",
    },

    {
      pid: "4",
      catid: "3",
      name: "product 4",
      img: "",
      aprice: 150,
      sprice: 320,
      status: "available",
    },
    {
      pid: "5",
      catid: "3",
      name: "product 5",
      img: "",
      aprice: 300,
      sprice: 520,
      status: "available",
    },
  ];
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
