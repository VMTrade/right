import React from "react";
import { Image } from "react-bootstrap";

export default function CategoryItem(props) {
  return (
    <div className="col col-xs-12 col-sm-6 col-md-3 item">
      <a className="category-item m-3 pt-5">
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
      </a>
      {props.category.isAvailable && (
        <div
          className="offer-top-text-banner"
          style={{
            top: "30px",
            left: "30px",
            background: "red",
            width: "auto",
            padding: "10px",
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px",
          }}
        >
          <div style={{ color: "white", fontSize: "11px" }}>Coming Soon</div>
        </div>
      )}
    </div>
  );
}
