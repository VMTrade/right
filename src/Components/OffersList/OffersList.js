import React from "react";
export default function OffersList() {
  return (
    <div className="section145">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-title-tt">
              <div className="main-title-left">
                <span>Offers</span>
                <h2>Best Values</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <a className="best-offer-item">
              <img src="images/best-offers/offer-1.jpg" alt="" />
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a className="best-offer-item">
              <img src="images/best-offers/offer-2.jpg" alt="" />
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a className="best-offer-item offr-none">
              <img src="images/best-offers/offer-3.jpg" alt="" />
              <div className="cmtk_dt">
                <div
                  className="product_countdown-timer offer-counter-text"
                  data-countdown="2021/01/06"
                ></div>
              </div>
            </a>
          </div>
          <div className="col-md-12">
            <a className="code-offer-item">
              <img src="images/best-offers/offer-4.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
