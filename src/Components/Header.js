import React from "react";
import Location from "./DropDown/Location";
import { Link } from "react-router-dom";

export default function Header() {
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
                <a className="offer-link">
                  <i className="uil uil-phone-alt"></i>1800-000-000
                </a>
              </li>

              <li>
                <a href="faq.html" className="offer-link">
                  <i className="uil uil-question-circle"></i>Help
                </a>
              </li>
              <li>
                <a
                  className="option_links  pull-bs-canvas-left"
                  title="Wishlist"
                >
                  <i className="uil uil-shopping-cart-alt icon_wishlist"></i>
                  <span className="noti_count1">3</span>
                </a>
              </li>
              <li className="ui dropdown">
                <a className="opts_account">
                  <img src="images/avatar/img-5.jpg" alt="" />
                  <span className="user__name">John Doe</span>
                  <i className="uil uil-angle-down"></i>
                </a>
                <div className="menu dropdown_account">
                  <div className="night_mode_switch__btn">
                    <a id="night-mode" className="btn-night-mode">
                      <i className="uil uil-moon"></i> Night mode
                      <span className="btn-night-mode-switch">
                        <span className="uk-switch-button"></span>
                      </span>
                    </a>
                  </div>
                  <a
                    href="dashboard_overview.html"
                    className="item channel_item"
                  >
                    <i className="uil uil-apps icon__1"></i>Dashbaord
                  </a>
                  <a
                    href="dashboard_my_orders.html"
                    className="item channel_item"
                  >
                    <i className="uil uil-box icon__1"></i>My Orders
                  </a>
                  <a
                    href="dashboard_my_wishlist.html"
                    className="item channel_item"
                  >
                    <i className="uil uil-heart icon__1"></i>My Wishlist
                  </a>
                  <a
                    href="dashboard_my_wallet.html"
                    className="item channel_item"
                  >
                    <i className="uil uil-usd-circle icon__1"></i>My Wallet
                  </a>
                  <a
                    href="dashboard_my_addresses.html"
                    className="item channel_item"
                  >
                    <i className="uil uil-location-point icon__1"></i>My Address
                  </a>
                  <a href="offers.html" className="item channel_item">
                    <i className="uil uil-gift icon__1"></i>Offers
                  </a>
                  <a href="faq.html" className="item channel_item">
                    <i className="uil uil-info-circle icon__1"></i>Faq
                  </a>
                  <a href="sign_in.html" className="item channel_item">
                    <i className="uil uil-lock-alt icon__1"></i>Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
