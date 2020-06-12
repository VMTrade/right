import React, { useState } from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryList() {
  const data = [
    {
      categoryId: 1,
      isAvailable: true,
      categoryName: "Vegetables & Fruits",
      categoryImage: "images/category/icon-1.svg",
    },
    {
      categoryId: 2,
      isAvailable: false,
      categoryName: "Grocery & Staples",
      categoryImage: "images/category/icon-2.svg",
    },
    {
      categoryId: 3,
      isAvailable: false,
      categoryName: "Dairy & Eggs",
      categoryImage: "images/category/icon-3.svg",
    },
    {
      categoryId: 4,
      isAvailable: false,
      categoryName: "Beverages",
      categoryImage: "images/category/icon-4.svg",
    },
    {
      categoryId: 5,
      isAvailable: false,
      categoryName: "Snacks",
      categoryImage: "images/category/icon-5.svg",
    },
    {
      categoryId: 6,
      isAvailable: false,
      categoryName: "Home Care",
      categoryImage: "images/category/icon-6.svg",
    },
    {
      categoryId: 7,
      isAvailable: true,
      categoryName: "Personal Care",
      categoryImage: "images/category/icon-8.svg",
    },
    {
      categoryId: 6,
      isAvailable: false,
      categoryName: "Pet Care",
      categoryImage: "images/category/icon-9.svg",
    },
    {
      categoryId: 6,
      isAvailable: true,
      categoryName: "Meat & Seafood",
      categoryImage: "images/category/icon-10.svg",
    },
    {
      categoryId: 6,
      isAvailable: false,
      categoryName: "Electronics",
      categoryImage: "images/category/icon-11.svg",
    },
  ];

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
        </div>
        <div className="row mb-5">
          {data.map((category) => (
            <CategoryItem category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
