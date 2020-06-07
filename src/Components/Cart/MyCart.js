import React from "react";

export default function MyCart() {
  return (
    <div className="bs-canvas bs-canvas-left position-fixed bg-cart h-100">
      <div className="bs-canvas-header side-cart-header p-3 ">
        <div className="d-inline-block  main-cart-title">
          My Cart <span>(2 Items)</span>
        </div>
        <button
          type="button"
          className="bs-canvas-close close"
          aria-label="Close"
        >
          <i className="uil uil-multiply"></i>
        </button>
      </div>
      <div className="bs-canvas-body">
        <div className="cart-top-total">
          <div className="cart-total-dil">
            <h4>Gambo Super Market</h4>
            <span>$34</span>
          </div>
          <div className="cart-total-dil pt-2">
            <h4>Delivery Charges</h4>
            <span>$1</span>
          </div>
        </div>
        <div className="side-cart-items">
          <div className="cart-item">
            <div className="cart-product-img">
              <img src="images/product/img-1.jpg" alt="" />
              <div className="offer-badge">6% OFF</div>
            </div>
            <div className="cart-text">
              <h4>Product Title Here</h4>
              <div className="cart-radio">
                <ul className="kggrm-now">
                  <li>
                    <input type="radio" id="a1" name="cart1" />
                    <label for="a1">0.50</label>
                  </li>
                  <li>
                    <input type="radio" id="a2" name="cart1" />
                    <label for="a2">1kg</label>
                  </li>
                  <li>
                    <input type="radio" id="a3" name="cart1" />
                    <label for="a3">2kg</label>
                  </li>
                  <li>
                    <input type="radio" id="a4" name="cart1" />
                    <label for="a4">3kg</label>
                  </li>
                </ul>
              </div>
              <div className="qty-group">
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
                <div className="cart-item-price">
                  $10 <span>$15</span>
                </div>
              </div>

              <button type="button" className="cart-close-btn">
                <i className="uil uil-multiply"></i>
              </button>
            </div>
          </div>
          <div className="cart-item">
            <div className="cart-product-img">
              <img src="images/product/img-2.jpg" alt="" />
              <div className="offer-badge">6% OFF</div>
            </div>
            <div className="cart-text">
              <h4>Product Title Here</h4>
              <div className="cart-radio">
                <ul className="kggrm-now">
                  <li>
                    <input type="radio" id="a5" name="cart2" />
                    <label for="a5">0.50</label>
                  </li>
                  <li>
                    <input type="radio" id="a6" name="cart2" />
                    <label for="a6">1kg</label>
                  </li>
                  <li>
                    <input type="radio" id="a7" name="cart2" />
                    <label for="a7">2kg</label>
                  </li>
                </ul>
              </div>
              <div className="qty-group">
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
                <div className="cart-item-price">
                  $24 <span>$30</span>
                </div>
              </div>
              <button type="button" className="cart-close-btn">
                <i className="uil uil-multiply"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bs-canvas-footer">
        <div className="cart-total-dil saving-total ">
          <h4>Total Saving</h4>
          <span>$11</span>
        </div>
        <div className="main-total-cart">
          <h2>Total</h2>
          <span>$35</span>
        </div>
        <div className="checkout-cart">
          <a className="promo-code">Have a promocode?</a>
          <a className="cart-checkout-btn hover-btn">Proceed to Checkout</a>
        </div>
      </div>
    </div>
  );
}
