import React from "react";

export default function Product(props) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="product-item mb-30">
        <a href="single_product_view.html" className="product-img">
          <img src="images/product/img-5.jpg" alt="" />
          <div className="product-absolute-options">
            <span className="offer-badge-1">2% off</span>
            <span className="like-icon" title="wishlist"></span>
          </div>
        </a>
        <div className="product-text-dt">
          <p>
            Available<span>(In Stock)</span>
          </p>
          <h4>Product Title Here</h4>
          <div className="product-price">
            $9 <span>$10</span>
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
