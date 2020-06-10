import React from "react";
import OwlCarousel, { Options } from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function ShopNowCardList() {
  const options = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  };
  return (
    <div className="wrapper">
      <div className="main-banner-slider">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel {...options}>
                <div className="owl-carousel offers-banner owl-theme">
                  {/*  <div className="item">
                    <div className="offer-item">
                      <div className="offer-item-img">
                        <div className="gambo-overlay"></div>
                        <img src="images/banners/offer-1.jpg" alt="" />
                      </div>
                      <div className="offer-text-dt">
                        <div className="offer-top-text-banner">
                          <p>6% Off</p>
                          <div className="top-text-1">Buy More & Save More</div>
                          <span>Fresh Vegetables</span>
                        </div>
                        <a className="Offer-shop-btn hover-btn">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer-item">
                      <div className="offer-item-img">
                        <div className="gambo-overlay"></div>
                        <img src="images/banners/offer-2.jpg" alt="" />
                      </div>
                      <div className="offer-text-dt">
                        <div className="offer-top-text-banner">
                          <p>5% Off</p>
                          <div className="top-text-1">Buy More & Save More</div>
                          <span>Fresh Fruits</span>
                        </div>
                        <a className="Offer-shop-btn hover-btn">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer-item">
                      <div className="offer-item-img">
                        <div className="gambo-overlay"></div>
                        <img src="images/banners/offer-3.jpg" alt="" />
                      </div>
                      <div className="offer-text-dt">
                        <div className="offer-top-text-banner">
                          <p>3% Off</p>
                          <div className="top-text-1">
                            Hot Deals on New Items
                          </div>
                          <span>Daily Essentials Eggs & Dairy</span>
                        </div>
                        <a className="Offer-shop-btn hover-btn">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer-item">
                      <div className="offer-item-img">
                        <div className="gambo-overlay"></div>
                        <img src="images/banners/offer-4.jpg" alt="" />
                      </div>
                      <div className="offer-text-dt">
                        <div className="offer-top-text-banner">
                          <p>2% Off</p>
                          <div className="top-text-1">Buy More & Save More</div>
                          <span>Beverages</span>
                        </div>
                        <a className="Offer-shop-btn hover-btn">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer-item">
                      <div className="offer-item-img">
                        <div className="gambo-overlay"></div>
                        <img src="images/banners/offer-5.jpg" alt="" />
                      </div>
                      <div className="offer-text-dt">
                        <div className="offer-top-text-banner">
                          <p>3% Off</p>
                          <div className="top-text-1">Buy More & Save More</div>
                          <span>Nuts & Snacks</span>
                        </div>
                        <a className="Offer-shop-btn hover-btn">Shop Now</a>
                      </div>
                    </div>
                  </div>
  */}
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
