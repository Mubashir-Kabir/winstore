import React from "react";
import placeholder from "../../resources/category-placeholder.jpg";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {
  return (
    <div className="col position-relative my-2">
      <img className="position-relative w-100" src={placeholder} alt="" />
      <p className="position-absolute categoryCardText bg-opacity-75 shadow-lg bg-white  fw-semibold">
        {category}
        <a className="ms-4 text-decoration-none text-info" href="#">
          Shop
        </a>
      </p>
    </div>
  );
};

export default CategoryCard;
