import React, { useState } from "react";
import { connect } from "react-redux";

import image from "./img-14.jpg";
import * as actionCreators from "../../Store/actions/index";
import "./product.css";

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    setQuantity(quantity - 1);
  };
  const handleCart = () => {
    console.log(props.data.pid + " " + quantity);
    const payload = {
      ...props.data,
      quantity: quantity,
    };
    props.addToCart(payload);
  };
  return (
    <div className="col-lg-3 col-md-6">
      <div className="productitem mb-30 ">
        <a href="single_product_view.html" className="product-img">
          <img src={image} alt="" />
        </a>
        <div className="product-text-dt">
          <p>
            {props.data.status === "available" ? "In Stock" : "Out of Stock"}
          </p>
          <h4>{props.data.name}</h4>
          <div className="product-price">
            ₹{props.data.aprice} <span> ₹{props.data.sprice}</span>
          </div>
          <div className="qtycart">
            <div className="quantity buttons_added">
              <input
                type="button"
                value="-"
                onClick={decrement}
                className="minus minus-btn"
              />
              <input
                type="number"
                step={1}
                name="quantity"
                value={quantity}
                className="input-text qty text"
              />
              <input
                type="button"
                value="+"
                onClick={increment}
                className="plus plus-btn"
              />
            </div>
          </div>
          <button className="cart-btn" onClick={handleCart}>
            <span className="cart-icon">
              <i className="uil uil-shopping-cart-alt"></i>
            </span>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (payload) => dispatch(actionCreators.addToCart(payload)),
  };
};
export default connect(null, mapDispatchToProps)(Product);
