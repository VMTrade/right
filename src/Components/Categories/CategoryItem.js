import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Image } from "react-bootstrap";
import "./ribbon.css";

function CategoryItem(props) {
  const curLocation = props.config.curLocation;
  const [error, setError] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  useEffect(() => {
    setIsAvailable(props.config.curBranch.services.includes(props.category.id));
  }, [curLocation]);

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
          curLocation && isAvailable
            ? "/" + curLocation + "/" + props.category.id
            : "/"
        }
        onClick={handleError}
        className="category-item m-3 pt-5"
      >
        <div className="cate-img">
          <Image
            fluid
            className="mx-auto d-block"
            src={props.category.image}
            alt=""
          />
        </div>
        <h4> {props.category.name} </h4>
      </Link>
      {!isAvailable && (
        <div class="ribbon ribbon-top-left">
          <span>{!curLocation ? "Select location" : "coming soon"}</span>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    config: state.config,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setNotification: (notification) =>
      dispatch({ type: "SETNOTIFICATION", payload: notification }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
