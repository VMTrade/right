import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import CartItem from "./CartItem";
import * as actionCreators from "../../Store/actions/index";

function Cart(props) {
  const dummyPrice = {
    totalPrice: 0,
    subTotal: 0,
    deliveryCharge: 40,
    savings: "",
  };
  const [price, setPrice] = useState(dummyPrice);
  useEffect(() => {
    let amountA = 0;
    let amountS = 0;
    props.state.cartItems.map((item) => {
      amountA += item.aprice * item.quantity;
      amountS += item.sprice * item.quantity;
    });
    setPrice({
      ...price,
      subTotal: amountA,
      savings: amountS,
      totalPrice: amountA + price.deliveryCharge,
    });
    return () => {
      setPrice(dummyPrice);
    };
  }, [props.state.cartItems]);

  return (
    <div>
      <div className="side-cart-header p-3 ">
        <div className="main-cart-title">
          My Cart <span>({props.state.cartItems.length})</span>
        </div>
      </div>
      <div className="">
        <div className="cart-top-total">
          <div className="cart-total-dil">
            <h4>Right Delivers</h4>
            <span>₹{price.totalPrice}</span>
          </div>
          <div className="cart-total-dil pt-2">
            <h4>Delivery Charges</h4>
            <span>₹{price.deliveryCharge}</span>
          </div>
        </div>

        <div className="side-cart-items">
          {props.state.cartItems.map((product) => (
            <CartItem product={product} />
          ))}
        </div>
      </div>
      <div className="">
        <div className="cart-total-dil saving-total ">
          <h4>Total Saving</h4>
          <span>₹{price.savings}</span>
        </div>
        <div className="main-total-cart">
          <h2>Total</h2>
          <span>₹{price.totalPrice}</span>
        </div>
        <div className="checkout-cart">
          <a href="#" className="promo-code">
            Have a promocode?
          </a>
          <a href="#" className="cart-checkout-btn hover-btn">
            Proceed to Checkout
          </a>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    state: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setQuantity: (quantity) => dispatch(actionCreators.setQuantity(quantity)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
