import React, { useState } from "react";
import OwlCarousel, { Options } from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CategoryItem from "./CategoryItem";

export default function CategoryList() {
  const options = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  };
  const [data, setData] = useState([
    {
      categoryId: 1,
      categoryName: "Vegetables & Fruits",
      categoryImage: "images/category/icon-1.svg",
    },
    {
      categoryId: 2,
      categoryName: "Grocery & Staples",
      categoryImage: "images/category/icon-2.svg",
    },
    {
      categoryId: 3,
      categoryName: "Dairy & Eggs",
      categoryImage: "images/category/icon-3.svg",
    },
    {
      categoryId: 4,
      categoryName: "Beverages",
      categoryImage: "images/category/icon-4.svg",
    },
    {
      categoryId: 5,
      categoryName: "Snacks",
      categoryImage: "images/category/icon-5.svg",
    },
    {
      categoryId: 6,
      categoryName: "Home Care",
      categoryImage: "images/category/icon-6.svg",
    },
    {
      categoryId: 7,
      categoryName: "Personal Care",
      categoryImage: "images/category/icon-8.svg",
    },
    {
      categoryId: 6,
      categoryName: "Pet Care",
      categoryImage: "images/category/icon-9.svg",
    },
    {
      categoryId: 6,
      categoryName: "Meat & Seafood",
      categoryImage: "images/category/icon-10.svg",
    },
    {
      categoryId: 6,
      categoryName: "Electronics",
      categoryImage: "images/category/icon-11.svg",
    },
  ]);
  return (
    <div className="section145">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-title-tt">
              <div className="main-title-left">
                <span>Shop By</span>
                <h2>Categories</h2>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <OwlCarousel className="cate-slider owl-theme" {...options}>
              {data.map((category) => (
                <CategoryItem category={category} />
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
