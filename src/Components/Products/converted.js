import React from "react";
export default function ProductsMain() {
  return (
    <div>
      <div
        id="category_model"
        className="header-cate-model main-gambo-model modal fade"
        tabindex="-1"
        role="dialog"
        aria-modal="false"
      >
        <div className="modal-dialog category-area" role="document">
          <div className="category-area-inner">
            <div className="modal-header">
              <button
                type="button"
                className="close btn-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="uil uil-multiply"></i>
              </button>
            </div>
            <div className="category-model-content modal-content">
              <div className="cate-header">
                <h4>Select Category</h4>
              </div>
              <ul className="category-by-cat">
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="images/category/icon-1.svg" alt="" />
                    </div>
                    <div className="text"> Fruits and Vegetables </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="images/category/icon-2.svg" alt="" />
                    </div>
                    <div className="text"> Grocery & Staples </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="images/category/icon-3.svg" alt="" />
                    </div>
                    <div className="text"> Dairy & Eggs </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="images/category/icon-4.svg" alt="" />
                    </div>
                    <div className="text"> Beverages </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="images/category/icon-5.svg" alt="" />
                    </div>
                    <div className="text"> Snacks </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="images/category/icon-6.svg" alt="" />
                    </div>
                    <div className="text"> Home Care </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="images/category/icon-7.svg" alt="" />
                    </div>
                    <div className="text"> Noodles & Sauces </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="images/category/icon-8.svg" alt="" />
                    </div>
                    <div className="text"> Personal Care </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="single-cat-item">
                    <div className="icon">
                      <img src="images/category/icon-9.svg" alt="" />
                    </div>
                    <div className="text"> Pet Care </div>
                  </a>
                </li>
              </ul>
              <a href="#" className="morecate-btn">
                <i className="uil uil-apps"></i>More Categories
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search Model Start */}
      <div
        id="search_model"
        className="header-cate-model main-gambo-model modal fade"
        tabindex="-1"
        role="dialog"
        aria-modal="false"
      >
        <div className="modal-dialog search-ground-area" role="document">
          <div className="category-area-inner">
            <div className="modal-header">
              <button
                type="button"
                className="close btn-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="uil uil-multiply"></i>
              </button>
            </div>
            <div className="category-model-content modal-content">
              <div className="search-header">
                <form action="#">
                  <input type="search" placeholder="Search for products..." />
                  <button type="submit">
                    <i className="uil uil-search"></i>
                  </button>
                </form>
              </div>
              <div className="search-by-cat">
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-1.svg" alt="" />
                  </div>
                  <div className="text">Fruits and Vegetables</div>
                </a>
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-2.svg" alt="" />
                  </div>
                  <div className="text"> Grocery & Staples </div>
                </a>
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-3.svg" alt="" />
                  </div>
                  <div className="text"> Dairy & Eggs </div>
                </a>
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-4.svg" alt="" />
                  </div>
                  <div className="text"> Beverages </div>
                </a>
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-5.svg" alt="" />
                  </div>
                  <div className="text"> Snacks </div>
                </a>
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-6.svg" alt="" />
                  </div>
                  <div className="text"> Home Care </div>
                </a>
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-7.svg" alt="" />
                  </div>
                  <div className="text"> Noodles & Sauces </div>
                </a>
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-8.svg" alt="" />
                  </div>
                  <div className="text"> Personal Care </div>
                </a>
                <a href="#" className="single-cat">
                  <div className="icon">
                    <img src="images/category/icon-9.svg" alt="" />
                  </div>
                  <div className="text"> Pet Care </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search Model End */}

      {/* Filter Right Sidebar Offset Start */}
      <div className="bs-canvas bs-canvas-right position-fixed bg-cart h-100">
        <div className="bs-canvas-header side-cart-header p-3 ">
          <div className="d-inline-block  main-cart-title">Filters</div>
          <button
            type="button"
            className="bs-canvas-close close"
            aria-label="Close"
          >
            <i className="uil uil-multiply"></i>
          </button>
        </div>
        <div className="bs-canvas-body filter-body">
          <div className="filter-items">
            <div className="filtr-cate-title">
              <h4>Categories</h4>
            </div>
            <div className="filter-item-body scrollstyle_4">
              <div className="cart-radio">
                <ul className="cte-select">
                  <li>
                    <input type="radio" id="c1" name="category1" />
                    <label for="c1">All</label>
                  </li>
                  <li>
                    <input type="radio" id="c2" name="category1" checked />
                    <label for="c2">Vegetables & Fruits</label>
                  </li>
                  <li>
                    <input type="radio" id="c3" name="category1" />
                    <label for="c3">Grocery & Staples</label>
                  </li>
                  <li>
                    <input type="radio" id="c4" name="category1" />
                    <label for="c4">Dairy & Eggs</label>
                  </li>
                  <li>
                    <input type="radio" id="c5" name="category1" />
                    <label for="c5">Beverages</label>
                  </li>
                  <li>
                    <input type="radio" id="c6" name="category1" />
                    <label for="c6">Snacks</label>
                  </li>
                  <li>
                    <input type="radio" id="c7" name="category1" />
                    <label for="c7">Home Care</label>
                  </li>
                  <li>
                    <input type="radio" id="c8" name="category1" />
                    <label for="c8">Noodles & Sauces</label>
                  </li>
                  <li>
                    <input type="radio" id="c9" name="category1" />
                    <label for="c9">Personal Care</label>
                  </li>
                  <li>
                    <input type="radio" id="c10" name="category1" />
                    <label for="c10">Pat Care</label>
                  </li>
                  <li>
                    <input type="radio" id="c11" name="category1" />
                    <label for="c11">Mea & Seafood</label>
                  </li>
                  <li>
                    <input type="radio" id="c12" name="category1" />
                    <label for="c12">Electronics</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="filter-items">
            <div className="filtr-cate-title">
              <h4>Brand</h4>
            </div>
            <div className="other-item-body scrollstyle_4">
              <div className="brand-list">
                <div className="search-by-catgory">
                  <div className="ui search">
                    <div className="ui left icon input swdh10">
                      <input
                        className="prompt srch10"
                        type="text"
                        placeholder="Search by brand.."
                      />
                      <i className="uil uil-search-alt icon icon1"></i>
                    </div>
                  </div>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="brand_1"
                  />
                  <label className="custom-control-label" for="brand_1">
                    Brand Name
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="brand_2"
                  />
                  <label className="custom-control-label" for="brand_2">
                    Brand Name
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="brand_3"
                  />
                  <label className="custom-control-label" for="brand_3">
                    Brand Name
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="brand_4"
                  />
                  <label className="custom-control-label" for="brand_4">
                    Brand Name
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="brand_5"
                  />
                  <label className="custom-control-label" for="brand_5">
                    Brand Name
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="brand_6"
                  />
                  <label className="custom-control-label" for="brand_6">
                    Brand Name
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="brand_7"
                  />
                  <label className="custom-control-label" for="brand_7">
                    Brand Name
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="brand_8"
                  />
                  <label className="custom-control-label" for="brand_8">
                    Brand Name
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="brand_9"
                  />
                  <label className="custom-control-label" for="brand_9">
                    Brand Name
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="brand_10"
                  />
                  <label className="custom-control-label" for="brand_10">
                    Brand Name
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-items">
            <div className="filtr-cate-title">
              <h4>Price</h4>
            </div>
            <div className="price-pack-item-body scrollstyle_4">
              <div className="brand-list">
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price_1"
                  />
                  <label className="custom-control-label" for="price_1">
                    Less than $2 <span className="webproduct">(9)</span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price_2"
                  />
                  <label className="custom-control-label" for="price_2">
                    $2 to $5 <span className="webproduct">(8)</span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price_3"
                  />
                  <label className="custom-control-label" for="price_3">
                    $6 to $10 <span className="webproduct">(12)</span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price_4"
                  />
                  <label className="custom-control-label" for="price_4">
                    $11 to $15 <span className="webproduct">(4)</span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price_5"
                  />
                  <label className="custom-control-label" for="price_5">
                    $15 to $20 <span className="webproduct">(16)</span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price_6"
                  />
                  <label className="custom-control-label" for="price_6">
                    $21 to $25 <span className="webproduct">(18)</span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price_7"
                  />
                  <label className="custom-control-label" for="price_7">
                    More than $25 <span className="webproduct">(25)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-items">
            <div className="filtr-cate-title">
              <h4>Discount</h4>
            </div>
            <div className="offer-item-body scrollstyle_4">
              <div className="brand-list">
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="offer_1"
                  />
                  <label className="custom-control-label" for="offer_1">
                    2% - 5% <span className="webproduct">(9)</span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="offer_2"
                  />
                  <label className="custom-control-label" for="offer_2">
                    6% - 10% <span className="webproduct">(5)</span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="offer_3"
                  />
                  <label className="custom-control-label" for="offer_3">
                    11% - 15% <span className="webproduct">(11)</span>
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="offer_4"
                  />
                  <label className="custom-control-label" for="offer_4">
                    16% - 25% <span className="webproduct">(27)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="filter-items">
            <div className="filtr-cate-title">
              <h4>Pack Size</h4>
            </div>
            <div className="price-pack-item-body scrollstyle_4">
              <div className="brand-list">
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="pack_1"
                  />
                  <label className="custom-control-label" for="pack_1">
                    1 pc
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="pack_2"
                  />
                  <label className="custom-control-label" for="pack_2">
                    1 pc approx. 400 to 600 gm
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="pack_3"
                  />
                  <label className="custom-control-label" for="pack_3">
                    1 pc approx. 500 to 800 gm
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="pack_4"
                  />
                  <label className="custom-control-label" for="pack_4">
                    Combo 3 Items
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="pack_5"
                  />
                  <label className="custom-control-label" for="pack_5">
                    Combo 4 Items
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="pack_6"
                  />
                  <label className="custom-control-label" for="pack_6">
                    Combo 5 Items
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="pack_7"
                  />
                  <label className="custom-control-label" for="pack_7">
                    2 pcs
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="pack_8"
                  />
                  <label className="custom-control-label" for="pack_8">
                    100 g
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="pack_9"
                  />
                  <label className="custom-control-label" for="pack_9">
                    200 g
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="pack_10"
                  />
                  <label className="custom-control-label" for="pack_10">
                    250 g
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="pack_11"
                  />
                  <label className="custom-control-label" for="pack_11">
                    500g
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="pack_12"
                  />
                  <label className="custom-control-label" for="pack_12">
                    1kg
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="pack_13"
                  />
                  <label className="custom-control-label" for="pack_13">
                    2kg
                  </label>
                </div>
                <div className="custom-control custom-checkbox pb2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="pack_14"
                  />
                  <label className="custom-control-label" for="pack_14">
                    3kg
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Filter Right Sidebar Offsetl End */}
      {/* Header Start  */}
      <header className="header clearfix">
        <div className="top-header-group">
          <div className="top-header">
            <div className="res_main_logo">
              <a href="index.html">
                <img src="images/dark-logo-1.svg" alt="" />
              </a>
            </div>
            <div className="main_logo" id="logo">
              <a href="index.html">
                <img src="images/logo.svg /" alt="" />
              </a>
              <a href="index.html">
                <img
                  className="logo-inverse"
                  src="images/dark-logo.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="select_location">
              <div className="ui inline dropdown loc-title">
                <div className="text">
                  <i className="uil uil-location-point"></i>
                  Gurugram
                </div>
                <i className="uil uil-angle-down icon__14"></i>
                <div className="menu dropdown_loc">
                  <div className="item channel_item">
                    <i className="uil uil-location-point"></i>
                    Gurugram
                  </div>
                  <div className="item channel_item">
                    <i className="uil uil-location-point"></i>
                    New Delhi
                  </div>
                  <div className="item channel_item">
                    <i className="uil uil-location-point"></i>
                    Bangaluru
                  </div>
                  <div className="item channel_item">
                    <i className="uil uil-location-point"></i>
                    Mumbai
                  </div>
                  <div className="item channel_item">
                    <i className="uil uil-location-point"></i>
                    Hyderabad
                  </div>
                  <div className="item channel_item">
                    <i className="uil uil-location-point"></i>
                    Kolkata
                  </div>
                  <div className="item channel_item">
                    <i className="uil uil-location-point"></i>
                    Ludhiana
                  </div>
                  <div className="item channel_item">
                    <i className="uil uil-location-point"></i>
                    Chandigrah
                  </div>
                </div>
              </div>
            </div>
            <div className="search120">
              <div className="ui search">
                <div className="ui left icon input swdh10">
                  <input
                    className="prompt srch10"
                    type="text"
                    placeholder="Search for products.."
                  />
                  <i className="uil uil-search-alt icon icon1"></i>
                </div>
              </div>
            </div>
            <div className="header_right">
              <ul>
                <li>
                  <a href="#" className="offer-link">
                    <i className="uil uil-phone-alt"></i>1800-000-000
                  </a>
                </li>
                <li>
                  <a href="offers.html" className="offer-link">
                    <i className="uil uil-gift"></i>Offers
                  </a>
                </li>
                <li>
                  <a href="faq.html" className="offer-link">
                    <i className="uil uil-question-circle"></i>Help
                  </a>
                </li>
                <li>
                  <a
                    href="dashboard_my_wishlist.html"
                    className="option_links"
                    title="Wishlist"
                  >
                    <i className="uil uil-heart icon_wishlist"></i>
                    <span className="noti_count1">3</span>
                  </a>
                </li>
                <li className="ui dropdown">
                  <a href="#" className="opts_account">
                    <img src="images/avatar/img-5.jpg" alt="" />
                    <span className="user__name">John Doe</span>
                    <i className="uil uil-angle-down"></i>
                  </a>
                  <div className="menu dropdown_account">
                    <div className="night_mode_switch__btn">
                      <a href="#" id="night-mode" className="btn-night-mode">
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
                      <i className="uil uil-location-point icon__1"></i>My
                      Address
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
        <div className="sub-header-group">
          <div className="sub-header">
            <div className="ui dropdown">
              <a
                href="#"
                className="category_drop hover-btn"
                data-toggle="modal"
                data-target="#category_model"
                title="Categories"
              >
                <i className="uil uil-apps"></i>
                <span className="cate__icon">Select Category</span>
              </a>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light py-3">
              <div className="container-fluid">
                <button
                  className="navbar-toggler menu_toggle_btn"
                  type="button"
                  data-target="#navbarSupportedContent"
                >
                  <i className="uil uil-bars"></i>
                </button>
                <div
                  className="collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav main_nav align-self-stretch">
                    <li className="nav-item">
                      <a
                        href="index.html"
                        className="nav-link active"
                        title="Home"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="shop_grid.html"
                        className="nav-link new_item"
                        title="New Products"
                      >
                        New Products
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="shop_grid.html"
                        className="nav-link"
                        title="Featured Products"
                      >
                        Featured Products
                      </a>
                    </li>
                    <li className="nav-item">
                      <div className="ui icon top left dropdown nav__menu">
                        <a className="nav-link" title="Pages">
                          Pages <i className="uil uil-angle-down"></i>
                        </a>
                        <div className="menu dropdown_page">
                          <a
                            href="dashboard_overview.html"
                            className="item channel_item page__links"
                          >
                            Account
                          </a>
                          <a
                            href="about_us.html"
                            className="item channel_item page__links"
                          >
                            About Us
                          </a>
                          <a
                            href="shop_grid.html"
                            className="item channel_item page__links"
                          >
                            Shop Grid
                          </a>
                          <a
                            href="single_product_view.html"
                            className="item channel_item page__links"
                          >
                            Single Product View
                          </a>
                          <a
                            href="checkout.html"
                            className="item channel_item page__links"
                          >
                            Checkout
                          </a>
                          <a
                            href="request_product.html"
                            className="item channel_item page__links"
                          >
                            Product Request
                          </a>
                          <a
                            href="order_placed.html"
                            className="item channel_item page__links"
                          >
                            Order Placed
                          </a>
                          <a
                            href="bill.html"
                            className="item channel_item page__links"
                          >
                            Bill Slip
                          </a>
                          <a
                            href="sign_in.html"
                            className="item channel_item page__links"
                          >
                            Sign In
                          </a>
                          <a
                            href="sign_up.html"
                            className="item channel_item page__links"
                          >
                            Sign Up
                          </a>
                          <a
                            href="forgot_password.html"
                            className="item channel_item page__links"
                          >
                            Forgot Password
                          </a>
                          <a
                            href="contact_us.html"
                            className="item channel_item page__links"
                          >
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <div className="ui icon top left dropdown nav__menu">
                        <a className="nav-link" title="Blog">
                          Blog <i className="uil uil-angle-down"></i>
                        </a>
                        <div className="menu dropdown_page">
                          <a
                            href="our_blog.html"
                            className="item channel_item page__links"
                          >
                            Our Blog
                          </a>
                          <a
                            href="blog_detail_view.html"
                            className="item channel_item page__links"
                          >
                            Blog Detail View
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        href="contact_us.html"
                        className="nav-link"
                        title="Contact"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="catey__icon">
              <a
                href="#"
                className="cate__btn"
                data-toggle="modal"
                data-target="#category_model"
                title="Categories"
              >
                <i className="uil uil-apps"></i>
              </a>
            </div>
            <div className="header_cart order-1">
              <a
                href="#"
                className="cart__btn hover-btn pull-bs-canvas-left"
                title="Cart"
              >
                <i className="uil uil-shopping-cart-alt"></i>
                <span>Cart</span>
                <ins>2</ins>
                <i className="uil uil-angle-down"></i>
              </a>
            </div>
            <div className="search__icon order-1">
              <a
                href="#"
                className="search__btn hover-btn"
                data-toggle="modal"
                data-target="#search_model"
                title="Search"
              >
                <i className="uil uil-search"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* Header End  */}
      {/* Body Start  */}
      <div className="wrapper">
        <div className="gambo-Breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Vegetables & Fruits
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="all-product-grid">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="product-top-dt">
                  <div className="product-left-title">
                    <h2>Vegetables & Fruits</h2>
                  </div>
                  <a href="#" className="filter-btn pull-bs-canvas-right">
                    Filters
                  </a>
                  <div className="product-sort">
                    <div className="ui selection dropdown vchrt-dropdown">
                      <input name="gender" type="hidden" value="default" />
                      <i className="dropdown icon d-icon"></i>
                      <div className="text">Popularity</div>
                      <div className="menu">
                        <div className="item" data-value="0">
                          Popularity
                        </div>
                        <div className="item" data-value="1">
                          Price - Low to High
                        </div>
                        <div className="item" data-value="2">
                          Price - High to Low
                        </div>
                        <div className="item" data-value="3">
                          Alphabetical
                        </div>
                        <div className="item" data-value="4">
                          Saving - High to Low
                        </div>
                        <div className="item" data-value="5">
                          Saving - Low to High
                        </div>
                        <div className="item" data-value="6">
                          % Off - High to Low
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list-view">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="product-item mb-30">
                    <a href="single_product_view.html" className="product-img">
                      <img src="images/product/img-1.jpg" alt="" />
                      <div className="product-absolute-options">
                        <span className="offer-badge-1">6% off</span>
                        <span className="like-icon" title="wishlist"></span>
                      </div>
                    </a>
                    <div className="product-text-dt">
                      <p>
                        Available<span>(In Stock)</span>
                      </p>
                      <h4>Product Title Here</h4>
                      <div className="product-price">
                        $12 <span>$15</span>
                      </div>
                      <div className="qty-cart">
                        <div className="quantity buttons_added">
                          <input
                            type="button"
                            value="-"
                            className="minus minus-btn"
                          />
                          <input
                            type="number"
                            step="1"
                            name="quantity"
                            value="1"
                            className="input-text qty text"
                          />
                          <input
                            type="button"
                            value="+"
                            className="plus plus-btn"
                          />
                        </div>
                        <span className="cart-icon">
                          <i className="uil uil-shopping-cart-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="product-item mb-30">
                    <a href="single_product_view.html" className="product-img">
                      <img src="images/product/img-2.jpg" alt="" />
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
                        $10 <span>$13</span>
                      </div>
                      <div className="qty-cart">
                        <div className="quantity buttons_added">
                          <input
                            type="button"
                            value="-"
                            className="minus minus-btn"
                          />
                          <input
                            type="number"
                            step="1"
                            name="quantity"
                            value="1"
                            className="input-text qty text"
                          />
                          <input
                            type="button"
                            value="+"
                            className="plus plus-btn"
                          />
                        </div>
                        <span className="cart-icon">
                          <i className="uil uil-shopping-cart-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="product-item mb-30">
                    <a href="single_product_view.html" className="product-img">
                      <img src="images/product/img-3.jpg" alt="" />
                      <div className="product-absolute-options">
                        <span className="offer-badge-1">5% off</span>
                        <span className="like-icon" title="wishlist"></span>
                      </div>
                    </a>
                    <div className="product-text-dt">
                      <p>
                        Available<span>(In Stock)</span>
                      </p>
                      <h4>Product Title Here</h4>
                      <div className="product-price">
                        $5 <span>$8</span>
                      </div>
                      <div className="qty-cart">
                        <div className="quantity buttons_added">
                          <input
                            type="button"
                            value="-"
                            className="minus minus-btn"
                          />
                          <input
                            type="number"
                            step="1"
                            name="quantity"
                            value="1"
                            className="input-text qty text"
                          />
                          <input
                            type="button"
                            value="+"
                            className="plus plus-btn"
                          />
                        </div>
                        <span className="cart-icon">
                          <i className="uil uil-shopping-cart-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="product-item mb-30">
                    <a href="single_product_view.html" className="product-img">
                      <img src="images/product/img-4.jpg" alt="" />
                      <div className="product-absolute-options">
                        <span className="offer-badge-1">3% off</span>
                        <span className="like-icon" title="wishlist"></span>
                      </div>
                    </a>
                    <div className="product-text-dt">
                      <p>
                        Available<span>(In Stock)</span>
                      </p>
                      <h4>Product Title Here</h4>
                      <div className="product-price">
                        $15 <span>$20</span>
                      </div>
                      <div className="qty-cart">
                        <div className="quantity buttons_added">
                          <input
                            type="button"
                            value="-"
                            className="minus minus-btn"
                          />
                          <input
                            type="number"
                            step="1"
                            name="quantity"
                            value="1"
                            className="input-text qty text"
                          />
                          <input
                            type="button"
                            value="+"
                            className="plus plus-btn"
                          />
                        </div>
                        <span className="cart-icon">
                          <i className="uil uil-shopping-cart-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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
                          <input
                            type="button"
                            value="-"
                            className="minus minus-btn"
                          />
                          <input
                            type="number"
                            step="1"
                            name="quantity"
                            value="1"
                            className="input-text qty text"
                          />
                          <input
                            type="button"
                            value="+"
                            className="plus plus-btn"
                          />
                        </div>
                        <span className="cart-icon">
                          <i className="uil uil-shopping-cart-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="product-item mb-30">
                    <a href="single_product_view.html" className="product-img">
                      <img src="images/product/img-6.jpg" alt="" />
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
                        $7 <span>$8</span>
                      </div>
                      <div className="qty-cart">
                        <div className="quantity buttons_added">
                          <input
                            type="button"
                            value="-"
                            className="minus minus-btn"
                          />
                          <input
                            type="number"
                            step="1"
                            name="quantity"
                            value="1"
                            className="input-text qty text"
                          />
                          <input
                            type="button"
                            value="+"
                            className="plus plus-btn"
                          />
                        </div>
                        <span className="cart-icon">
                          <i className="uil uil-shopping-cart-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="product-item mb-30">
                    <a href="single_product_view.html" className="product-img">
                      <img src="images/product/img-7.jpg" alt="" />
                      <div className="product-absolute-options">
                        <span className="offer-badge-1">1% off</span>
                        <span className="like-icon" title="wishlist"></span>
                      </div>
                    </a>
                    <div className="product-text-dt">
                      <p>
                        Available<span>(In Stock)</span>
                      </p>
                      <h4>Product Title Here</h4>
                      <div className="product-price">
                        $6.95 <span>$7</span>
                      </div>
                      <div className="qty-cart">
                        <div className="quantity buttons_added">
                          <input
                            type="button"
                            value="-"
                            className="minus minus-btn"
                          />
                          <input
                            type="number"
                            step="1"
                            name="quantity"
                            value="1"
                            className="input-text qty text"
                          />
                          <input
                            type="button"
                            value="+"
                            className="plus plus-btn"
                          />
                        </div>
                        <span className="cart-icon">
                          <i className="uil uil-shopping-cart-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="product-item mb-30">
                    <a href="single_product_view.html" className="product-img">
                      <img src="images/product/img-11.jpg" alt="" />
                      <div className="product-absolute-options">
                        <span className="offer-badge-1">6% off</span>
                        <span className="like-icon" title="wishlist"></span>
                      </div>
                    </a>
                    <div className="product-text-dt">
                      <p>
                        Available<span>(In Stock)</span>
                      </p>
                      <h4>Product Title Here</h4>
                      <div className="product-price">
                        $12 <span>$15</span>
                      </div>
                      <div className="qty-cart">
                        <div className="quantity buttons_added">
                          <input
                            type="button"
                            value="-"
                            className="minus minus-btn"
                          />
                          <input
                            type="number"
                            step="1"
                            name="quantity"
                            value="1"
                            className="input-text qty text"
                          />
                          <input
                            type="button"
                            value="+"
                            className="plus plus-btn"
                          />
                        </div>
                        <span className="cart-icon">
                          <i className="uil uil-shopping-cart-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="product-item mb-30">
                    <a href="single_product_view.html" className="product-img">
                      <img src="images/product/img-12.jpg" alt="" />
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
                        $10 <span>$13</span>
                      </div>
                      <div className="qty-cart">
                        <div className="quantity buttons_added">
                          <input
                            type="button"
                            value="-"
                            className="minus minus-btn"
                          />
                          <input
                            type="number"
                            step="1"
                            name="quantity"
                            value="1"
                            className="input-text qty text"
                          />
                          <input
                            type="button"
                            value="+"
                            className="plus plus-btn"
                          />
                        </div>
                        <span className="cart-icon">
                          <i className="uil uil-shopping-cart-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="product-item mb-30">
                    <a href="single_product_view.html" className="product-img">
                      <img src="images/product/img-13.jpg" alt="" />
                      <div className="product-absolute-options">
                        <span className="offer-badge-1">5% off</span>
                        <span className="like-icon" title="wishlist"></span>
                      </div>
                    </a>
                    <div className="product-text-dt">
                      <p>
                        Available<span>(In Stock)</span>
                      </p>
                      <h4>Product Title Here</h4>
                      <div className="product-price">
                        $5 <span>$8</span>
                      </div>
                      <div className="qty-cart">
                        <div className="quantity buttons_added">
                          <input
                            type="button"
                            value="-"
                            className="minus minus-btn"
                          />
                          <input
                            type="number"
                            step="1"
                            name="quantity"
                            value="1"
                            className="input-text qty text"
                          />
                          <input
                            type="button"
                            value="+"
                            className="plus plus-btn"
                          />
                        </div>
                        <span className="cart-icon">
                          <i className="uil uil-shopping-cart-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="product-item mb-30">
                    <a href="single_product_view.html" className="product-img">
                      <img src="images/product/img-14.jpg" alt="" />
                      <div className="product-absolute-options">
                        <span className="offer-badge-1">1% off</span>
                        <span className="like-icon" title="wishlist"></span>
                      </div>
                    </a>
                    <div className="product-text-dt">
                      <p>
                        Available<span>(In Stock)</span>
                      </p>
                      <h4>Product Title Here</h4>
                      <div className="product-price">
                        $6.95 <span>$7</span>
                      </div>
                      <div className="qty-cart">
                        <div className="quantity buttons_added">
                          <input
                            type="button"
                            value="-"
                            className="minus minus-btn"
                          />
                          <input
                            type="number"
                            step="1"
                            name="quantity"
                            value="1"
                            className="input-text qty text"
                          />
                          <input
                            type="button"
                            value="+"
                            className="plus plus-btn"
                          />
                        </div>
                        <span className="cart-icon">
                          <i className="uil uil-shopping-cart-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="product-item mb-30">
                    <a href="single_product_view.html" className="product-img">
                      <img src="images/product/img-8.jpg" alt="" />
                      <div className="product-absolute-options">
                        <span className="offer-badge-1">3% off</span>
                        <span className="like-icon" title="wishlist"></span>
                      </div>
                    </a>
                    <div className="product-text-dt">
                      <p>
                        Available<span>(In Stock)</span>
                      </p>
                      <h4>Product Title Here</h4>
                      <div className="product-price">
                        $8 <span>$10</span>
                      </div>
                      <div className="qty-cart">
                        <div className="quantity buttons_added">
                          <input
                            type="button"
                            value="-"
                            className="minus minus-btn"
                          />
                          <input
                            type="number"
                            step="1"
                            name="quantity"
                            value="1"
                            className="input-text qty text"
                          />
                          <input
                            type="button"
                            value="+"
                            className="plus plus-btn"
                          />
                        </div>
                        <span className="cart-icon">
                          <i className="uil uil-shopping-cart-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="more-product-btn">
                    <button
                      className="show-more-btn hover-btn"
                      onclick="window.location.href = '#';"
                    >
                      Show More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
