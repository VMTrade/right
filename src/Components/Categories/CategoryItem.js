import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Image } from "react-bootstrap";
import "./ribbon.css";

function CategoryItem(props) {
  const curLocation = props.curLocation;
  const [error, setError] = useState("");
  const handleError = () => {
    if (curLocation) {
      setError("");
    } else {
      setError("Choose your location first");
    }
    props.setNotification(error);
  };
  return (
    <div className="col col-xs-12 col-sm-6 col-md-3 item">
      <Link
        to={
          curLocation && props.category.isAvailable
            ? "/" + curLocation + "/" + props.category.categoryId
            : "/"
        }
        onClick={handleError}
        className="category-item m-3 pt-5"
      >
        <div className="cate-img">
          <Image
            width="140"
            fluid
            className="mx-auto d-block"
            src={props.category.categoryImage}
            alt=""
          />
        </div>
        <h4> {props.category.categoryName} </h4>
      </Link>
      {!props.category.isAvailable && (
        <div class="ribbon ribbon-top-left">
          <span>coming soon</span>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    curLocation: state.config.curLocation,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setNotification: (notification) =>
      dispatch({ type: "SETNOTIFICATION", payload: notification }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
