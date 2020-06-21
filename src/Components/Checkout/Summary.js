import React from "react";
import { Link } from "react-router-dom";
import CheckoutItems from "./CheckoutItems.js";

export default function Summary(props) {
  return (
    <div className="all-product-grid">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-7">
            <h1> CheckOut Steps</h1>
            <h2>Select your Address or add new</h2>
            <h2>Payment Options</h2>

            <Link
              to={`${props.match.url}/OrderStatus`}
              className="next-btn16 hover-btn"
            >
              Place Order
            </Link>
          </div>
          <div className="col-lg-4 col-md-5">
            <CheckoutItems />
          </div>
        </div>
      </div>
    </div>
  );
}
