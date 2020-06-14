import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar } from "react-bootstrap";

import logo from "../Assets/logo.svg";

import Location from "./DropDown/Location";
import Menu from "./DropDown/Menu";

function Header(props) {
  const contactInfo = "1800-000-000";
  const cartCount = props.cartCount;
  return (
    <div sticky="top" className="header clearfix">
      <div className="top-header-group">
        <div className="top-header">
          <div className="main_logo" id="logo">
            <Link to="/">
              <img src={logo} alt="Right Delivers" />
              <img
                className="logo-inverse"
                src="../Assets/images/dark-logo.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="select_location">
            <Location />
          </div>
          <div className="select_location"></div>

          <div className="header_right">
            <ul>
              <li>
                <i className="uil uil-phone-alt"></i>
                {contactInfo}
              </li>

              <li>
                <Link to="/dashboard/faq" className="offer-link">
                  <i className="uil uil-question-circle"></i>Help
                </Link>
              </li>
              <li>
                <Link to="/dashboard/cart" className="option_links">
                  <i className="uil uil-shopping-cart-alt icon_wishlist"></i>
                  <span className="noti_count1">{cartCount}</span>
                </Link>
              </li>
              <li className="ui dropdown">
                <Menu />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cartCount: state.cart.cartItems.length,
  };
};
export default connect(mapStateToProps)(Header);
