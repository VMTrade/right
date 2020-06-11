import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

export default connect()(function SignIn(props) {
  const history = useHistory();
  const emptyLoginData = {
    phone: "",
    password: "",
    errors: { phone: "", password: "" },
  };
  const [loginData, setLoginData] = useState(emptyLoginData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(loginData);
      history.push("/home");
      setLoginData(emptyLoginData);
    }
  };

  const validateForm = () => {
    let errors = loginData.errors;
    let formIsValid = true;

    if (!loginData["phone"]) {
      formIsValid = false;
      errors["phone"] = "*Please enter your mobile no.";
    } else if (typeof loginData["phone"] !== "undefined") {
      if (!loginData["phone"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["phone"] = "*Please enter valid mobile no.";
      }
    } else {
      errors["phone"] = "";
    }

    if (!loginData["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    } else if (typeof loginData["password"] !== "undefined") {
      if (
        !loginData["password"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    } else {
      errors["password"] = "";
    }

    setLoginData({
      ...loginData,
      errors: errors,
    });
    return formIsValid;
  };

  return (
    <div className="sign-inup">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="sign-form">
              <div className="sign-inner">
                <div className="sign-logo" id="logo">
                  <Link to="/home">
                    <img src="images/logo.svg" alt="" />
                  </Link>
                  <Link to="/home">
                    {" "}
                    <img
                      className="logo-inverse"
                      src="images/dark-logo.svg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="form-dt">
                  <div className="form-inpts checout-address-step">
                    <form onSubmit={handleSubmit}>
                      <div className="form-title">
                        <h6>Sign In</h6>
                      </div>
                      <div className="form-group pos_rel">
                        <input
                          id="phone[number]"
                          name="phone"
                          type="text"
                          value={loginData.phone}
                          placeholder="Enter Phone Number"
                          onChange={handleChange}
                          className="form-control lgn_input"
                          required=""
                        />
                        <i className="uil uil-mobile-android-alt lgn_icon"></i>
                      </div>
                      <p style={{ color: "red" }}>{loginData.errors.phone}</p>
                      <div className="form-group pos_rel">
                        <input
                          id="password1"
                          name="password"
                          type="password"
                          placeholder="Enter Password"
                          value={loginData.password}
                          onChange={handleChange}
                          className="form-control lgn_input"
                          required=""
                        />
                        <i className="uil uil-padlock lgn_icon"></i>
                      </div>
                      <p style={{ color: "red" }}>
                        {loginData.errors.password}
                      </p>
                      <button className="login-btn hover-btn" type="submit">
                        Sign In Now
                      </button>
                    </form>
                  </div>
                  <div className="password-forgor">
                    <Link to="/forgotPassword">Forgot Password?</Link>
                  </div>
                  <div className="signup-link">
                    <p>
                      Don't have an account? -{" "}
                      <Link to="register">Sign Up Now</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
