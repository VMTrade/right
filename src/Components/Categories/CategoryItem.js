import React from "react";

export default function CategoryItem(props) {
  return (
    <div className="item">
      <a className="category-item">
        <div className="cate-img">
          <img src={props.category.categoryImage} alt="" />
        </div>
        <h4> {props.category.categoryName} </h4>
      </a>
    </div>
  );
}
