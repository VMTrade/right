import React from "react";

export default function CheckoutSteps(props) {
  return (
    <div id="checkout_wizard" className="checkout accordion left-chck145">
      <div className="checkout-step">
        <div className="checkout-card" id="headingOne">
          <span className="checkout-step-number">1</span>
          <h4 className="checkout-step-title">
            <button
              className="wizard-btn"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {" "}
              Phone Number Verification
            </button>
          </h4>
        </div>
        <div
          id="collapseOne"
          className="collapse in show"
          data-parent="#checkout_wizard"
        >
          <div className="checkout-step-body">
            <p>
              We need your phone number so we can inform you about any delay or
              problem.
            </p>
            <p className="phn145">
              4 digits code send your phone <span>+918437176189</span>
              <a
                className="edit-no-btn hover-btn"
                data-toggle="collapse"
                href="#edit-number"
              >
                Edit
              </a>
            </p>
            <div className="collapse" id="edit-number">
              <div className="row">
                <div className="col-lg-8">
                  <div className="checkout-login">
                    <form>
                      <div className="login-phone">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                      <a
                        className="chck-btn hover-btn"
                        role="button"
                        data-toggle="collapse"
                        href="#otp-verifaction"
                      >
                        Send Code
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="otp-verifaction">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mb-0">
                    <label className="control-label">Enter Code</label>
                    <ul className="code-alrt-inputs">
                      <li>
                        <input
                          id="code[1]"
                          name="number"
                          type="text"
                          placeholder=""
                          className="form-control input-md"
                          required=""
                        />
                      </li>
                      <li>
                        <input
                          id="code[2]"
                          name="number"
                          type="text"
                          placeholder=""
                          className="form-control input-md"
                          required=""
                        />
                      </li>
                      <li>
                        <input
                          id="code[3]"
                          name="number"
                          type="text"
                          placeholder=""
                          className="form-control input-md"
                          required=""
                        />
                      </li>
                      <li>
                        <input
                          id="code[4]"
                          name="number"
                          type="text"
                          placeholder=""
                          className="form-control input-md"
                          required=""
                        />
                      </li>
                      <li>
                        <a
                          className="collapsed chck-btn hover-btn"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#checkout_wizard"
                          href="#collapseTwo"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                    <a href="#" className="resend-link">
                      Resend Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-step">
        <div className="checkout-card" id="headingTwo">
          <span className="checkout-step-number">2</span>
          <h4 className="checkout-step-title">
            <button
              className="wizard-btn collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              {" "}
              Delivery Address
            </button>
          </h4>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#checkout_wizard"
        >
          <div className="checkout-step-body">
            <div className="checout-address-step">
              <div className="row">
                <div className="col-lg-12">
                  <form className="">
                    <div className="form-group">
                      <div className="product-radio">
                        <ul className="product-now">
                          <li>
                            <input
                              type="radio"
                              id="ad1"
                              name="address1"
                              checked
                            />
                            <label for="ad1">Home</label>
                          </li>
                          <li>
                            <input type="radio" id="ad2" name="address1" />
                            <label for="ad2">Office</label>
                          </li>
                          <li>
                            <input type="radio" id="ad3" name="address1" />
                            <label for="ad3">Other</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="address-fieldset">
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group">
                            <label className="control-label">Name*</label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Name"
                              className="form-control input-md"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group">
                            <label className="control-label">
                              Email Address*
                            </label>
                            <input
                              id="email1"
                              name="email1"
                              type="text"
                              placeholder="Email Address"
                              className="form-control input-md"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label className="control-label">
                              Flat / House / Office No.*
                            </label>
                            <input
                              id="flat"
                              name="flat"
                              type="text"
                              placeholder="Address"
                              className="form-control input-md"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label className="control-label">
                              Street / Society / Office Name*
                            </label>
                            <input
                              id="street"
                              name="street"
                              type="text"
                              placeholder="Street Address"
                              className="form-control input-md"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group">
                            <label className="control-label">Pincode*</label>
                            <input
                              id="pincode"
                              name="pincode"
                              type="text"
                              placeholder="Pincode"
                              className="form-control input-md"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group">
                            <label className="control-label">Locality*</label>
                            <input
                              id="Locality"
                              name="locality"
                              type="text"
                              placeholder="Enter City"
                              className="form-control input-md"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <div className="address-btns">
                              <button className="save-btn14 hover-btn">
                                Save
                              </button>
                              <a
                                className="collapsed ml-auto next-btn16 hover-btn"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#checkout_wizard"
                                href="#collapseThree"
                              >
                                {" "}
                                Next{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-step">
        <div className="checkout-card" id="headingThree">
          <span className="checkout-step-number">3</span>
          <h4 className="checkout-step-title">
            <button
              className="wizard-btn collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {" "}
              Delivery Time & Date{" "}
            </button>
          </h4>
        </div>
        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#checkout_wizard"
        >
          <div className="checkout-step-body">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label className="control-label">Select Date and Time*</label>
                  <div className="date-slider-group">
                    <div className="owl-carousel date-slider owl-theme">
                      <div className="item">
                        <div className="date-now">
                          <input
                            type="radio"
                            id="dd1"
                            name="address1"
                            checked=""
                          />
                          <label for="dd1">Today</label>
                        </div>
                      </div>
                      <div className="item">
                        <div className="date-now">
                          <input type="radio" id="dd2" name="address1" />
                          <label for="dd2">Tomorrow</label>
                        </div>
                      </div>
                      <div className="item">
                        <div className="date-now">
                          <input type="radio" id="dd3" name="address1" />
                          <label for="dd3">10 May 2020</label>
                        </div>
                      </div>
                      <div className="item">
                        <div className="date-now">
                          <input type="radio" id="dd4" name="address1" />
                          <label for="dd4">11 May 2020</label>
                        </div>
                      </div>
                      <div className="item">
                        <div className="date-now">
                          <input type="radio" id="dd5" name="address1" />
                          <label for="dd5">12 May 2020</label>
                        </div>
                      </div>
                      <div className="item">
                        <div className="date-now">
                          <input type="radio" id="dd6" name="address1" />
                          <label for="dd6">13 May 2020</label>
                        </div>
                      </div>
                      <div className="item">
                        <div className="date-now">
                          <input type="radio" id="dd7" name="address1" />
                          <label for="dd7">14 May 2020</label>
                        </div>
                      </div>
                      <div className="item">
                        <div className="date-now">
                          <input type="radio" id="dd8" name="address1" />
                          <label for="dd8">15 May 2020</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="time-radio">
                    <div className="ui form">
                      <div className="grouped fields">
                        <div className="field">
                          <div className="ui radio checkbox chck-rdio">
                            <input
                              type="radio"
                              name="fruit"
                              checked=""
                              tabindex="0"
                              className="hidden"
                            />
                            <label>8.00AM - 10.00AM</label>
                          </div>
                        </div>
                        <div className="field">
                          <div className="ui radio checkbox chck-rdio">
                            <input
                              type="radio"
                              name="fruit"
                              tabindex="0"
                              className="hidden"
                            />
                            <label>10.00AM - 12.00PM</label>
                          </div>
                        </div>
                        <div className="field">
                          <div className="ui radio checkbox chck-rdio">
                            <input
                              type="radio"
                              name="fruit"
                              tabindex="0"
                              className="hidden"
                            />
                            <label>12.00PM - 2.00PM</label>
                          </div>
                        </div>
                        <div className="field">
                          <div className="ui radio checkbox chck-rdio">
                            <input
                              type="radio"
                              name="fruit"
                              tabindex="0"
                              className="hidden"
                            />
                            <label>2.00PM - 4.00PM</label>
                          </div>
                        </div>
                        <div className="field">
                          <div className="ui radio checkbox chck-rdio">
                            <input
                              type="radio"
                              name="fruit"
                              tabindex="0"
                              className="hidden"
                            />
                            <label>4.00PM - 6.00PM</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="collapsed next-btn16 hover-btn"
              role="button"
              data-toggle="collapse"
              href="#collapseFour"
            >
              {" "}
              Proccess to payment{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="checkout-step">
        <div className="checkout-card" id="headingFour">
          <span className="checkout-step-number">4</span>
          <h4 className="checkout-step-title">
            <button
              className="wizard-btn collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Payment
            </button>
          </h4>
        </div>
        <div
          id="collapseFour"
          className="collapse"
          aria-labelledby="headingFour"
          data-parent="#checkout_wizard"
        >
          <div className="checkout-step-body">
            <div className="payment_method-checkout">
              <div className="row">
                <div className="col-md-12">
                  <div className="rpt100">
                    <ul className="radio--group-inline-container_1">
                      <li>
                        <div className="radio-item_1">
                          <input
                            id="cashondelivery1"
                            value="cashondelivery"
                            name="paymentmethod"
                            type="radio"
                            data-minimum="50.0"
                          />
                          <label
                            for="cashondelivery1"
                            className="radio-label_1"
                          >
                            Cash on Delivery
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio-item_1">
                          <input
                            id="card1"
                            value="card"
                            name="paymentmethod"
                            type="radio"
                            data-minimum="50.0"
                          />
                          <label for="card1" className="radio-label_1">
                            Credit / Debit Card
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="form-group return-departure-dts"
                    data-method="cashondelivery"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="pymnt_title">
                          <h4>Cash on Delivery</h4>
                          <p>
                            Cash on Delivery will not be available if your order
                            value exceeds $10.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="form-group return-departure-dts"
                    data-method="card"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="pymnt_title mb-4">
                          <h4>Credit / Debit Card</h4>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mt-1">
                          <label className="control-label">Holder Name*</label>
                          <div className="ui search focus">
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="holdername"
                                value=""
                                id="holder[name]"
                                required=""
                                maxlength="64"
                                placeholder="Holder Name"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mt-1">
                          <label className="control-label">Card Number*</label>
                          <div className="ui search focus">
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="cardnumber"
                                value=""
                                id="card[number]"
                                required=""
                                maxlength="64"
                                placeholder="Card Number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group mt-1">
                          <label className="control-label">
                            Expiration Month*
                          </label>
                          <select
                            className="ui fluid search dropdown form-dropdown"
                            name="card[expire-month]"
                          >
                            <option value="">Month</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group mt-1">
                          <label className="control-label">
                            Expiration Year*
                          </label>
                          <div className="ui search focus">
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="card[expire-year]"
                                maxlength="4"
                                placeholder="Year"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group mt-1">
                          <label className="control-label">CVV*</label>
                          <div className="ui search focus">
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                name="card[cvc]"
                                maxlength="3"
                                placeholder="CVV"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
