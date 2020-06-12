import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const data = [
    {
      categoryId: 1,
      isAvailable: true,
      categoryName: "Vegetables & Fruits",
      categoryImage: "images/category/icon-1.svg",
    },
    {
      categoryId: 2,
      isAvailable: false,
      categoryName: "Grocery & Staples",
      categoryImage: "images/category/icon-2.svg",
    },
    {
      categoryId: 3,
      isAvailable: false,
      categoryName: "Dairy & Eggs",
      categoryImage: "images/category/icon-3.svg",
    },
    {
      categoryId: 4,
      isAvailable: false,
      categoryName: "Beverages",
      categoryImage: "images/category/icon-4.svg",
    },
    {
      categoryId: 5,
      isAvailable: false,
      categoryName: "Snacks",
      categoryImage: "images/category/icon-5.svg",
    },
    {
      categoryId: 6,
      isAvailable: false,
      categoryName: "Home Care",
      categoryImage: "images/category/icon-6.svg",
    },
    {
      categoryId: 7,
      isAvailable: true,
      categoryName: "Personal Care",
      categoryImage: "images/category/icon-8.svg",
    },
    {
      categoryId: 6,
      isAvailable: false,
      categoryName: "Pet Care",
      categoryImage: "images/category/icon-9.svg",
    },
    {
      categoryId: 6,
      isAvailable: true,
      categoryName: "Meat & Seafood",
      categoryImage: "images/category/icon-10.svg",
    },
    {
      categoryId: 6,
      isAvailable: false,
      categoryName: "Electronics",
      categoryImage: "images/category/icon-11.svg",
    },
  ];
  const contact = "1800-234-567";
  const infoMail = "info@gambosupermarket.com";
  const locationList = [];
  return (
    <div className="footer">
      <div className="footer-first-row">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <ul className="call-email-alt">
                <li>
                  <a className="callemail">
                    <i className="uil uil-dialpad-alt"></i>
                    {contact}
                  </a>
                </li>
                <li>
                  <a className="callemail">
                    <i className="uil uil-envelope-alt"></i>
                    {infoMail}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="social-links-footer">
                <ul>
                  <li>
                    <a>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-second-row">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="second-row-item">
                <h4>Categories</h4>
                <ul>
                  {data.map((d) => (
                    <li>
                      <Link>{d.categoryName}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="second-row-item">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="about_us.html">About US</a>
                  </li>
                  <li>
                    <a href="shop_grid.html">Featured Products</a>
                  </li>
                  <li>
                    <a href="offers.html">Offers</a>
                  </li>
                  <li>
                    <a href="our_blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="faq.html">Faq</a>
                  </li>
                  <li>
                    <a href="career.html">Careers</a>
                  </li>
                  <li>
                    <a href="contact_us.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="second-row-item">
                <h4>Top Cities</h4>
                <ul>
                  {locationList.map((location) => (
                    <li>
                      <Link to="/home/location">{location}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="second-row-item-app">
                <h4>Download App</h4>
                <ul>
                  <li>
                    <a>
                      <img
                        className="download-btn"
                        src="images/download-1.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        className="download-btn"
                        src="images/download-2.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="second-row-item-payment">
                <h4>Payment Method</h4>
                <div className="footer-payments">
                  <ul id="paypal-gateway" className="financial-institutes">
                    <li className="financial-institutes__logo">
                      <img
                        alt="Visa"
                        title="Visa"
                        src="images/footer-icons/pyicon-6.svg"
                      />
                    </li>
                    <li className="financial-institutes__logo">
                      <img
                        alt="Visa"
                        title="Visa"
                        src="images/footer-icons/pyicon-1.svg"
                      />
                    </li>
                    <li className="financial-institutes__logo">
                      <img
                        alt="MasterCard"
                        title="MasterCard"
                        src="images/footer-icons/pyicon-2.svg"
                      />
                    </li>
                    <li className="financial-institutes__logo">
                      <img
                        alt="American Express"
                        title="American Express"
                        src="images/footer-icons/pyicon-3.svg"
                      />
                    </li>
                    <li className="financial-institutes__logo">
                      <img
                        alt="Discover"
                        title="Discover"
                        src="images/footer-icons/pyicon-4.svg"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="second-row-item-payment">
                <h4>Newsletter</h4>
                <div className="newsletter-input">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email Address"
                    className="form-control input-md"
                    required=""
                  />
                  <button className="newsletter-btn hover-btn" type="submit">
                    <i className="uil uil-telegram-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-last-row">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-bottom-links">
                <ul>
                  <li>
                    <a href="about_us.html">About</a>
                  </li>
                  <li>
                    <a href="contact_us.html">Contact</a>
                  </li>
                  <li>
                    <a href="privacy_policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="term_and_conditions.html">Term & Conditions</a>
                  </li>
                  <li>
                    <a href="refund_and_return_policy.html">
                      Refund & Return Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
