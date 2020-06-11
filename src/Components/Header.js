import React from "react";
import { Link } from "react-router-dom";

import Location from "./DropDown/Location";
import Menu from "./DropDown/Menu";

export default function Header() {
  const contactInfo = "1800-000-000";
  const cartCount = 4;
  return (
    <div className="header clearfix">
      <div className="top-header-group">
        <div className="top-header">
          <div className="main_logo" id="logo">
            <Link to="/">
              <img src="images/logo.svg" alt="" />
              <img className="logo-inverse" src="images/dark-logo.svg" alt="" />
            </Link>
          </div>
          <div className="select_location">
            <Location />
          </div>

          <div className="header_right">
            <ul>
              <li>
                <i className="uil uil-phone-alt"></i>
                {contactInfo}
              </li>

              <li>
                <Link to="faq" className="offer-link">
                  <i className="uil uil-question-circle"></i>Help
                </Link>
              </li>
              <li>
                <a className="option_links  pull-bs-canvas-left" title="Cart">
                  <i className="uil uil-shopping-cart-alt icon_wishlist"></i>
                  <span className="noti_count1">{cartCount}</span>
                </a>
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
