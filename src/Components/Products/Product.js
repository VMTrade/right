import React from "react";
import image from "./img-14.jpg";
export default function Product(props) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="product-item mb-30">
        <a href="single_product_view.html" className="product-img">
          <img src={image} alt="" />
        </a>
        <div className="product-text-dt">
          <p>
            Available<span>(In Stock)</span>
          </p>
          <h4>Product Title Here</h4>
          <div className="product-price">
            {props.data.aprice} <span>{props.data.sprice}</span>
          </div>
          <div className="qty-cart">
            <div className="quantity buttons_added">
              <input type="button" value="-" className="minus minus-btn" />
              <input
                type="number"
                step="1"
                name="quantity"
                value="1"
                className="input-text qty text"
              />
              <input type="button" value="+" className="plus plus-btn" />
            </div>
            <span className="cart-icon">
              <i className="uil uil-shopping-cart-alt"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
